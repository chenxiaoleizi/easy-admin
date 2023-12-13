import { h } from "vue";
import SvgIcon from "@/components/svgIcon/Index.vue";
import { RouteRecordRaw } from "vue-router";

type TreeNode = {
  path: string;
  children?: TreeNode[];
};

// 权限数据转 map 结构
export function treeToMap(tree: TreeNode[]) {
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
export function generateUserRoutes(
  dynamicRoutes: RouteRecordRaw[],
  authMap,
  parent?: RouteRecordRaw
) {
  return dynamicRoutes.filter((route) => {
    let hasAuth = false;
    if (parent && route.path === "") {
      // 空的嵌套路径表示访问父路由的路径时希望渲染出子路由的内容
      hasAuth = true;
    } else {
      hasAuth = authMap.has(route.path);
      if (hasAuth) {
        if (!route.meta) {
          route.meta = {};
        }
        route.meta.title = authMap.get(route.path).title;
        route.meta.label = authMap.get(route.path).label;
        if (route.children && route.children.length > 0) {
          route.children = generateUserRoutes(route.children, authMap, route);
        }
      }
    }

    return hasAuth;
  });
}

// 根据用户的路由和权限，生成左侧菜单数据
// export function generateMenuData(userRoutes: RouteRecordRaw[], authMap) {
//   return userRoutes.map((route) => {
//     const auth = authMap.get(route.name);
//     const menuItem = {
//       title: auth?.label,
//       label: auth?.label,
//       path: auth?.path,
//       key: route.name
//     };
//     if (
//       !route.meta?.showParent &&
//       route.children &&
//       route.children.length > 0
//     ) {
//       menuItem.children = generateMenuData(route.children, authMap);
//     }

//     return menuItem;
//   });
// }
export function generateMenuData(authData: any[], routeMap) {
  return authData.map((auth) => {
    const route = routeMap.get(auth?.path);
    const menuItem = {
      title: auth?.label,
      label: auth?.label,
      path: auth?.path,
      key: auth?.path,
      icon: h(SvgIcon, { name: route?.meta.icon, style: { fontSize: "16px" } })
    };
    if (auth.children && auth.children.length > 0) {
      menuItem.children = generateMenuData(auth.children, routeMap);
    }

    return menuItem;
  });
}

// 注册用户路由
export function registryUserRoutes(userRoutes: RouteRecordRaw[], router) {
  userRoutes.forEach((userRoute) => router.addRoute(userRoute));
}
