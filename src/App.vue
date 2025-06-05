<template>
  <a-config-provider :locale="zhCN">
    <RouterView></RouterView>
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
</script>
