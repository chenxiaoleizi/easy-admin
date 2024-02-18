<template>
  <a-config-provider :theme="theme" :locale="zhCN">
    <RouterView></RouterView>
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";

const theme = {
  token: {
    borderRadius: 5,
  },
};
</script>

<style scoped></style>
