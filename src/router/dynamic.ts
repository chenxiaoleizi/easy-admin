import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/Index.vue";

// 当访问父路由的路径时，如果想渲染出子路由的内容，需要做两部
// 1. 子路由的 path 设为 ""
// 2. 子路由设置 name 属性

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      title: "首页",
      icon: "home"
    },
    component: Layout,
    children: [
      {
        // https://router.vuejs.org/guide/essentials/nested-routes.html#Nested-Named-Routes
        // path 为空字符串，保证路径为 "/" 时显示嵌套路由
        path: "",
        name: "home",
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
    meta: {
      title: "指令",
      icon: "directive"
    },
    component: Layout,
    children: [
      {
        // https://router.vuejs.org/guide/essentials/nested-routes.html#Nested-Named-Routes
        // path 为空字符串，保证路径为 "/directive" 时显示嵌套路由
        path: "",
        name: "directive",
        meta: {
          title: "指令"
        },
        component: () => import("@/views/directive/Index.vue")
      }
    ]
  }
];

export default dynamicRoutes;
