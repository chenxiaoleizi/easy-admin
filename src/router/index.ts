import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import staticRoutes from "./static";
import { useUserStore } from "@/store/user";

type TreeNode = {
  name: string;
  children?: TreeNode[];
};

// 权限数据转 map 结构
export function treeToMap(tree: TreeNode[]) {
  const map = new Map();
  const queue = [...tree];

  while (queue.length > 0) {
    const treeNode = queue.pop();
    if (!treeNode) continue;

    map.set(treeNode.name, treeNode);
    if (treeNode.children && treeNode.children.length > 0) {
      queue.unshift(...treeNode.children);
    }
  }

  return map;
}

// 根据动态路由和权限数据，生成用户的路由
export function generateUserRoutes(dynamicRoutes: RouteRecordRaw[], authMap) {
  return dynamicRoutes.filter((route) => {
    if (!route.name) return true;

    const hasAuth = authMap.has(route.name);
    if (hasAuth) {
      if (!route.meta) {
        route.meta = {};
      }
      route.meta.title = authMap.get(route.name).title;
      route.meta.label = authMap.get(route.name).label;
      if (route.children && route.children.length > 0) {
        route.children = generateUserRoutes(route.children, authMap);
      }
    }

    return hasAuth;
  });
}

// 根据用户的路由和权限，生成左侧菜单数据
export function generateMenuData(userRoutes: RouteRecordRaw[], authMap) {
  return userRoutes.map((route) => {
    const auth = authMap.get(route.name);
    const menuItem = {
      title: auth?.label,
      label: auth?.label,
      path: auth?.path
    };
    console.log(route.meta);
    if (
      !route.meta?.showParent &&
      route.children &&
      route.children.length > 0
    ) {
      menuItem.children = generateMenuData(route.children, authMap);
    }

    return menuItem;
  });
}

// 注册用户路由
export function registryUserRoutes(userRoutes: RouteRecordRaw[]) {
  userRoutes.forEach((userRoute) => router.addRoute(userRoute));
}

export const router = createRouter({
  routes: staticRoutes,
  history: createWebHashHistory()
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  // debugger;
  if (!userStore.token && to.name !== "login") {
    // 未登录，并且不是跳转到登录页
    return { name: "login" };
  } else {
    if (!window.userRoutesRegisted) {
      await userStore.processAuth();
      console.log(router.getRoutes());
      window.userRoutesRegisted = true;
      router.replace(to.path);
    }
  }
});
