import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Layout from "@/components/layout/Index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue")
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        alias: ["/"],
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "userList",
        name: "userList",
        component: () => import("@/views/system/user/UserList.vue")
      }
    ]
  }
];

export const router = createRouter({
  routes,
  history: createWebHashHistory()
});
