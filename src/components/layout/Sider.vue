<template>
  <a-layout-sider theme="light">
    <div class="logo">LOGO</div>
    <div class="menus">
      <a-menu mode="inline" :items="items" theme="light"></a-menu>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
const items = [
  {
    label: "系统设置",
    key: "sys",
    icon: "",
    children: [
      {
        label: "用户设置",
        key: "user",
        icon: ""
      },
      {
        label: "角色设置",
        key: "role",
        icon: ""
      }
    ]
  }
];
</script>

<style scoped>
.logo {
  height: 64px;
}
</style>
