import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import staticRoutes from "./static";
import { useUserStore } from "@/store/user";
import { useRouteStore } from "@/store/route";

export const router = createRouter({
  routes: staticRoutes,
  history: createWebHashHistory(),
});

export function addRoutes(routes: RouteRecordRaw[]) {
  for (const route of routes) {
    router.addRoute(route);
  }
}

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const routeStore = useRouteStore();
  const hasToken = userStore.token;

  if (hasToken) {
    // 已登录
    if (!routeStore.routes) {
      await routeStore.initRoutes();
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
