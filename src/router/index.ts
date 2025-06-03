import { createRouter, createWebHashHistory } from "vue-router";
import staticRoutes from "./static";
import dynamicRoutes from "./dynamic";
import { useUserStore } from "@/store/user";
import { usePermissionStore } from "@/store/permission";
import { message } from "ant-design-vue";
import { cancelRequest } from "@/api/http";

const router = createRouter({
  routes: [...staticRoutes, ...dynamicRoutes],
  history: createWebHashHistory(),
});

router.beforeEach(async (to, from) => {
  cancelRequest();
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();

  if (userStore.token) {
    // 初始化权限
    if (!permissionStore.initialized) {
      try {
        await permissionStore.initPermission(router);
      } catch {
        message.error("加载权限信息出错");
        userStore.reset();
        return "/login";
      }
    }

    // 跳转的是非登录后的页面，或者从登录页跳转过来，需要跳转到第一个菜单对应的页面
    const firstMenuPath = permissionStore.firstMenu.path;
    if (to.path === "/login") return firstMenuPath;
    if (from.path === "/login" && to.path !== firstMenuPath) return firstMenuPath;

    return true;
  } else {
    // 未登录
    if (to.path !== "/login") return "/login";
    return true;
  }
});

export default router;
