import { createPinia, defineStore } from "pinia";

export const pinia = createPinia();

export const useUserStore = defineStore("userStore", {
  state() {
    return {
      token: ""
    };
  },
  actions: {
    login() {
      return Promise.resolve();
    }
  }
});
