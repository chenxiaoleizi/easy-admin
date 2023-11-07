import { defineStore } from "pinia";
import { login } from "@/api/user";

export const useUserStore = defineStore("userStore", {
  state() {
    return {
      token: "",
      authData: {}
    };
  },
  actions: {
    login(params) {
      login(params).then(() => {
        // 设置 token，保存用户信息
        // 请求跳转到首页前需要的数据
      });
    }
  }
});
