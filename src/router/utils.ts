import { h } from "vue";
import type { ItemType } from "ant-design-vue";
import SvgIcon from "@/components/svgIcon/Index.vue";
import { type RouteRecordRaw } from "vue-router";

type TreeNode = {
  label: string;
  name: string;
  path: string;
  id: number;
  children?: TreeNode[];
};
type MenuItem = { path: string; children?: MenuItem[] } & ItemType;

// 权限数据转 map 结构
export function treeToMap(tree: TreeNode[] | RouteRecordRaw[]) {
  const map = new Map();
  const queue = [...tree];

  while (queue.length > 0) {
    const treeNode = queue.pop();
    if (!treeNode) continue;

    map.set(treeNode.path, treeNode);

    if (treeNode.children && treeNode.children.length > 0) {
      queue.unshift(...treeNode.children);
    }
  }

  return map;
}

// 根据动态路由和权限数据，生成用户的路由
export function filterRoutes(dynamicRoutes: RouteRecordRaw[], authMap: Map<string, TreeNode>, parent?: RouteRecordRaw) {
  return dynamicRoutes.filter((route) => {
    let hasAuth = false;
    if (parent && (parent?.meta?.thisLevelHidden || route.path === "")) {
      // 空的嵌套路径表示访问父路由的路径时希望渲染出子路由的内容
      hasAuth = true;
    } else {
      hasAuth = authMap.has(route.path);
      if (hasAuth) {
        if (route.children && route.children.length > 0) {
          route.children = filterRoutes(route.children, authMap, route);
        }
      }
    }
    return hasAuth;
  });
}

// 根据用户的路由和权限，生成左侧菜单数据
export function generateMenuData(userRoutes: RouteRecordRaw[], authMap: Map<string, TreeNode>) {
  return userRoutes.flatMap((route) => {
    if (route?.path === "") {
      return [];
    }

    const auth = authMap.get(route.path);
    const menuItem: MenuItem = {
      title: auth?.label ?? route?.meta?.title,
      label: auth?.label ?? route?.meta?.title,
      path: route?.path,
      key: auth?.id,
      icon: h(SvgIcon, { name: route?.meta?.icon as string, style: { fontSize: "16px" } }),
    };
    if (route.children && route.children.length > 0) {
      const children = generateMenuData(route.children, authMap);
      if (children.length > 0) {
        menuItem.children = children;
      }
    }

    return menuItem;
  });
}
