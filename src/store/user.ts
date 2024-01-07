import { defineStore } from "pinia";
import { router } from "@/router/index";
import { login } from "@/api/user";

function setToken(token: string) {
  localStorage.setItem("token", token);
}
function getToken() {
  return localStorage.getItem("token");
}
function removeToken() {
  localStorage.removeItem("token");
}

export const useUserStore = defineStore("userStore", {
  state(): UserStoreState {
    return {
      token: getToken() as string,
      username: "",
      avatar: "",
    };
  },
  actions: {
    setToken(token: string) {
      setToken(token);
      this.token = token;
    },
    setUsername(username: string) {
      this.username = username;
    },
    setAvatar(avatar: string) {
      this.avatar = avatar;
    },
    async login(params: any) {
      const res = await login(params);

      // 登陆成功，保存 token，用户信息
      const { token, username, avatar } = res.data;
      this.setToken(token);
      this.setUsername(username);
      this.setAvatar(avatar);
    },
    logout() {
      this.token = "";
      this.username = "";
      this.avatar = "";

      removeToken();

      router.push({ name: "login" });
    },
  },
});
