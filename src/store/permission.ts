import { defineStore } from "pinia";
import type { ItemType } from "ant-design-vue";
import { useRoute, type Router } from "vue-router";
import { getAuthData } from "@/api/router";

const whiteList = ["/login", "/:pathMatch(.*)*"];
type PermissionItem = {
  id: string;
  path: string;
  name: string;
  buttonPermissions?: string[];
  hide?: boolean;
  children?: PermissionItem[];
};

/**
 * 创建 permission map
 * @param input 用户的权限树
 * @returns
 */
function createPermissionMap(input: PermissionItem[]) {
  const map = new Map();

  const queue = [...input];
  while (queue.length > 0) {
    const node = queue.pop();
    if (!node) continue;

    const { path } = node;
    if (!map.has(path)) map.set(path, node);
    if (node.children && node.children.length > 0) {
      queue.unshift(...node.children);
    }
  }
  return map;
}

/**
 * 创建左侧菜单数据
 * @param input 用户的权限树
 * @returns
 */
function createMenuItems(input?: PermissionItem[]): any[] | null {
  if (!input) return null;

  input = input.filter((item) => !item.hide); // 过滤调不在菜单中显示的 menu

  return input.map((item) => {
    return {
      key: `${item.id}`,
      label: item.name,
      path: item.path,
      children: createMenuItems(item.children),
    };
  });
}

function removeNoPermissionRoute(router: Router, permissionMap: Map<string, any>) {
  const routes = router.getRoutes();
  routes.forEach((route) => {
    const { path, name } = route;
    if (!permissionMap.has(path) && !whiteList.includes(path)) {
      router.removeRoute(name as string);
    }
  });
}

export const usePermissionStore = defineStore("permission", {
  state() {
    return {
      initialized: false,
      permissionMap: new Map() as Map<string, PermissionItem>,
      menuItems: [] as any,
    };
  },
  getters: {
    buttonPermissions(state) {
      const path = useRoute().path;
      const permission = state.permissionMap.get(path);
      return permission?.buttonPermissions ?? [];
    },
    firstMenu(state) {
      let first = state.menuItems[0];
      while (first.children && first.children.length > 0) {
        first = first.children[0];
      }
      return first;
    },
  },
  actions: {
    setPermissionMap(map: Map<string, PermissionItem>) {
      this.permissionMap = map;
    },
    setMenuItems(items: ItemType[]) {
      this.menuItems = items;
    },
    /**
     * @description 用来初始化权限，生成权限 map，左侧菜单，移除没有权限的路由
     * @param router - 路由实例
     */
    async initPermission(router: Router) {
      // 请求权限数据
      const res = await getAuthData();
      const data = res ?? [];

      // 生成权限 map
      const map = createPermissionMap(data);
      this.setPermissionMap(map);

      // 生成左侧菜单
      const items = createMenuItems(data);
      this.setMenuItems(items ?? []);

      // 移除没有权限的路由
      removeNoPermissionRoute(router, map);

      this.initialized = true;
    },
  },
});
