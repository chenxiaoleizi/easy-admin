import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/Index.vue";

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      title: "首页",
      icon: "home",
    },
    component: Layout,
    children: [
      {
        path: "/",
        meta: {
          title: "首页",
          icon: "home",
          hideInBreadcrumb: true, // 用于面包屑过滤
        },
        component: () => import("@/views/home/Index.vue"),
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    meta: {
      title: "系统设置",
      icon: "settings",
    },
    component: Layout,
    children: [
      {
        path: "/system/userList",
        name: "userList",
        meta: {
          title: "用户列表",
          icon: "users",
        },
        component: () => import("@/views/system/user/Index.vue"),
      },
      {
        path: "/system/roleList",
        name: "roleList",
        meta: {
          title: "角色列表",
          icon: "role",
        },
        component: () => import("@/views/system/role/RoleList.vue"),
      },
      {
        path: "/system/menuList",
        name: "menuList",
        meta: {
          title: "菜单列表",
          icon: "menu",
        },
        component: () => import("@/views/system/menu/Index.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: {
      title: "组合式函数",
      icon: "home",
    },
    component: Layout,
    children: [
      {
        path: "/composable",
        meta: {
          title: "组合式函数",
          icon: "home",
          hideInBreadcrumb: true, // 用于面包屑过滤
        },
        component: () => import("@/views/composable/Index.vue"),
      },
    ],
  },
  {
    path: "/components",
    meta: {
      title: "组件",
      icon: "home",
    },
    component: Layout,
    children: [
      {
        path: "/components/table",
        meta: {
          title: "表格",
          icon: "home",
        },
        component: () => import("@/views/components/table/Index.vue"),
      },
      {
        path: "/components/tree",
        meta: {
          title: "树",
          icon: "home",
        },
        component: () => import("@/views/components/tree/Index.vue"),
      },
      {
        path: "/components/upload",
        meta: {
          title: "上传",
          icon: "home",
        },
        component: () => import("@/views/components/upload/Index.vue"),
      },
    ],
  },
];

export default dynamicRoutes;
