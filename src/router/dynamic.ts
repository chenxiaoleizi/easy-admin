import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/Index.vue";

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    meta: {
      title: "首页",
      showParent: true
    },
    component: Layout,
    children: [
      {
        path: "index",
        meta: {
          title: "首页"
        },
        component: () => import("@/views/home/Index.vue")
      }
    ]
  },
  {
    path: "/system",
    name: "system",
    meta: {
      title: "系统设置"
    },
    component: Layout,
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
];

export default dynamicRoutes;
