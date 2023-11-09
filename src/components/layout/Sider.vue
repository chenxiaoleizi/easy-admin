<template>
  <a-layout-sider theme="light">
    <div class="logo">LOGO</div>
    <div class="menus">
      <a-menu
        mode="inline"
        :items="items"
        theme="light"
        @click="handleClick"
      ></a-menu>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const items = [
  {
    label: "系统设置",
    key: "sys",
    icon: "",
    children: [
      {
        label: "用户设置",
        key: "user",
        icon: "",
        path: "/sys/userList"
      },
      {
        label: "角色设置",
        key: "role",
        icon: "",
        path: "/sys/roleList"
      }
    ]
  }
];

function handleClick({ item }) {
  router.push(item.path);
}
</script>

<style scoped>
.logo {
  height: 64px;
}
</style>
