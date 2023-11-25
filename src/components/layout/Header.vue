<template>
  <a-layout-header class="header" style="background: white">
    <div class="header-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div>
      <User></User>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import Breadcrumb from "./Breadcrumb.vue";
import User from "./User.vue";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.header-left {
  display: flex;
  align-items: center;
}
</style>
