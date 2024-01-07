import { createRouter, createWebHashHistory } from "vue-router";
import staticRoutes from "./static";
import { useUserStore } from "@/store/user";
import { useRouterStore } from "@/store/router";

export const router = createRouter({
  routes: staticRoutes,
  history: createWebHashHistory(),
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const routerStore = useRouterStore();
  const hasToken = userStore.token;

  if (hasToken) {
    // 已登录
    if (!routerStore.routes) {
      await routerStore.initRoutes();
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
