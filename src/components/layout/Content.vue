<template>
  <a-layout-content class="content">
    <router-view></router-view>
  </a-layout-content>
</template>

<style scoped>
.content {
  height: calc(100% - var(--header-height));
  overflow: auto;
  padding: 16px;
}
</style>
