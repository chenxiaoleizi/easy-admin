import { defineStore } from "pinia";
import { type RouteRecordRaw } from "vue-router";
import { getAuthData } from "@/api/router";
import { addRoutes } from "@/router/index";
import { treeToMap, filterRoutes, generateMenuData } from "@/router/utils";
import dynamicRoutes from "@/router/dynamic";

type RouteState = {
  routes: RouteRecordRaw[];
  menuData: [];
};

export const useRouteStore = defineStore("routeStore", {
  state(): RouteState {
    return {
      routes: [],
      menuData: [],
    };
  },
  actions: {
    async initRoutes() {
      const routes = [...dynamicRoutes];
      const { data: authData } = await getAuthData();
      const authMap = treeToMap(authData);

      const userRoutes = filterRoutes(routes, authMap);
      const menuData = generateMenuData(userRoutes, authMap);
      this.routes = userRoutes;
      this.menuData = menuData;
      console.log(menuData);

      addRoutes(userRoutes);
    },
  },
});
