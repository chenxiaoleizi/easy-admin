import { defineStore } from "pinia";
import { getAuthData } from "@/api/router";
import { addRoutes } from "@/router/index";
import { treeToMap, filterRoutes, generateMenuData } from "@/router/utils";
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
      const routes = [...dynamicRoutes];
      const { data: authData } = await getAuthData();

      const authMap = treeToMap(authData);
      const routeMap = treeToMap(routes);

      const userRoutes = filterRoutes(routes, authMap);
      const menuData = generateMenuData(authData, routeMap);
      console.log(userRoutes);
      this.routes = userRoutes;
      this.menuData = menuData;

      addRoutes(userRoutes);
    },
  },
});
