<template>
  <div class="main">
    <a-layout style="height: 100%">
      <Sider></Sider>
      <a-layout>
        <Header></Header>
        <Content></Content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import Sider from "./Sider.vue";
import Header from "./Header.vue";
import Content from "./Content.vue";
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
