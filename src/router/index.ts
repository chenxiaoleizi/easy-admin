import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue"),
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
