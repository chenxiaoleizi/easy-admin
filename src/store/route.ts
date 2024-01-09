import { defineStore } from "pinia";
import { getAuthData } from "@/api/router";
import { router } from "@/router/index";
import { treeToMap, generateUserRoutes, generateMenuData, registryUserRoutes } from "@/router/utils";
import dynamicRoutes from "@/router/dynamic";

export const useRouteStore = defineStore("routeStore", {
  state() {
    return {
      routes: undefined,
      menuData: [],
    };
  },
  actions: {
    async initRoutes() {
      const authDataRes = await getAuthData();
      const authData = authDataRes.data;

      const authMap = treeToMap(authData);
      const routeMap = treeToMap(dynamicRoutes);

      const userRoutes = generateUserRoutes(dynamicRoutes, authMap);
      const menuData = generateMenuData(authData, routeMap);

      this.routes = userRoutes;
      this.menuData = menuData;

      registryUserRoutes(userRoutes, router);
    },
  },
});
