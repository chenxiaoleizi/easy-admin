import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/Index.vue";

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    meta: {
      title: "首页",
      showParent: true,
      icon: "home"
    },
    component: Layout,
    children: [
      {
        path: "/index",
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
      title: "系统设置",
      icon: "settings"
    },
    component: Layout,
    children: [
      {
        path: "/system/userList",
        name: "userList",
        meta: {
          title: "用户列表",
          icon: "users"
        },
        component: () => import("@/views/system/user/UserList.vue")
      },
      {
        path: "/system/roleList",
        name: "roleList",
        meta: {
          title: "角色列表",
          icon: "role"
        },
        component: () => import("@/views/system/role/RoleList.vue")
      },
      {
        path: "/system/menuList",
        name: "menuList",
        meta: {
          title: "菜单列表",
          icon: "menu"
        },
        component: () => import("@/views/system/menu/Index.vue")
      }
    ]
  },
  {
    path: "/directive",
    name: "directive",
    // redirect: "/directive/index",
    meta: {
      title: "指令",
      showParent: true,
      icon: "directive"
    },
    component: Layout,
    children: [
      {
        path: "",
        name: "directiveIndex",
        meta: {
          title: "指令"
        },
        component: () => import("@/views/directive/Index.vue")
      }
    ]
  }
];

export default dynamicRoutes;
