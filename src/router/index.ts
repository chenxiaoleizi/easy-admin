import { createRouter, createWebHashHistory } from "vue-router";
import staticRoutes from "./static";
import { useUserStore } from "@/store/user";

export const router = createRouter({
  routes: staticRoutes,
  history: createWebHashHistory(),
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const hasToken = userStore.token;

  if (hasToken) {
    // 已登录
    if (!window["userRoutesRegisted"]) {
      await userStore.processAuth();
      window["userRoutesRegisted"] = true;
      router.replace(to.path);
      return;
    }

    if (to.name === "login") {
      return { name: "home" };
    }
  } else {
    // 未登录
    if (to.name !== "login") {
      return { name: "login" };
    }
  }
});
