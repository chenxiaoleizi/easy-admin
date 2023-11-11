import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Layout from "@/components/layout/Index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/notFound/Index.vue")
  },
  {
    path: "/",
    name: "layout",
    meta: {
      title: "layout"
    },
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title: "首页"
        },
        alias: ["/"],
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "system",
        name: "system",
        meta: {
          title: "系统设置"
        },
        children: [
          {
            path: "userList",
            name: "userList",
            meta: {
              title: "用户列表"
            },
            component: () => import("@/views/system/user/UserList.vue")
          },
          {
            path: "roleList",
            name: "roleList",
            meta: {
              title: "角色列表"
            },
            component: () => import("@/views/system/role/RoleList.vue")
          }
        ]
      }
    ]
  }
];

export const router = createRouter({
  routes,
  history: createWebHashHistory()
});
