<template>
  <a-layout-header class="header" style="background: white">
    <div class="header-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="header-right">
      <span>{{ clock }}</span>
      <a-divider type="vertical" />
      <User></User>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import Breadcrumb from "./Breadcrumb.vue";
import User from "./User.vue";
import { useClock } from "@/composables/index";

const clock = useClock();
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid @colorBorder;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
}
</style>
