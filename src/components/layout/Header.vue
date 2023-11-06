<template>
  <a-layout-header class="header" style="background: white">
    <div>Header Left</div>
    <div>
      <User></User>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import User from "./User.vue";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
