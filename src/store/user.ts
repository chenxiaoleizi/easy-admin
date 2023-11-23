import { defineStore } from "pinia";
import { router } from "@/router/index";
import {
  treeToMap,
  generateUserRoutes,
  generateMenuData,
  registryUserRoutes
} from "@/router/utils";

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

        return await this.processAuth();
      });
    },
    logout() {
      this.token = "";
      this.authData = {};
      localStorage.removeItem("token");
      router.push({ name: "login" });
    },
    async processAuth() {
      const authDataRes = await getAuthData();
      const authData = authDataRes.data;

      const authMap = treeToMap(authData);
      const routeMap = treeToMap(dynamicRoutes);

      const userRoutes = generateUserRoutes(dynamicRoutes, authMap);
      const menuData = generateMenuData(authData, routeMap);
      registryUserRoutes(userRoutes, router);

      this.menuData = menuData;

      console.log("userRoutes", userRoutes);
      console.log("menuData", menuData);
      // console.log("authData", authData);
    }
  }
});
