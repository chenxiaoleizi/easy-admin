import { defineStore } from "pinia";
import {
  router,
  treeToMap,
  generateUserRoutes,
  generateMenuData,
  registryUserRoutes
} from "@/router/index";
import dynamicRoutes from "@/router/dynamic";
import { login, getAuthData } from "@/api/user";

export const useUserStore = defineStore("userStore", {
  state() {
    const token = localStorage.getItem("token");
    return {
      token: token || "",
      username: "",
      authData: {}, // 原始的权限数据
      menuData: [] // 菜单数据
    };
  },
  actions: {
    login(params: any) {
      return login(params).then(async (res) => {
        // 设置 token，保存用户信息
        const { token, username } = res.data;
        localStorage.setItem("token", token);
        this.token = token;
        this.username = username;

        await this.processAuth();

        // 请求跳转到首页前需要的数据
        router.replace({ name: "home" });
      });
    },
    logout() {
      this.token = "";
      this.authData = {};
      router.push({ name: "login" });
    },
    async processAuth() {
      const authDataRes = await getAuthData();
      const authData = authDataRes.data;

      const authMap = treeToMap(authData);
      const userRoutes = generateUserRoutes(dynamicRoutes, authMap);
      const menuData = generateMenuData(dynamicRoutes, authMap);
      registryUserRoutes(userRoutes);

      this.menuData = menuData;

      console.log("menuData", menuData);
      console.log("authData", authData);
      console.log("userRoutes", userRoutes);
    }
  }
});
