import { RouteRecordRaw } from "vue-router";

const staticRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/notFound/Index.vue")
  }
];

export default staticRoutes;
