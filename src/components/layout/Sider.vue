<template>
  <a-layout-sider theme="light">
    <div class="logo">LOGO</div>
    <div class="menus">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="light"
        :items="items"
        @click="handleClick"
      ></a-menu>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/store/user";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const selectedKeys = ref([]);
const items = computed(() => {
  return userStore.menuData;
});

watchEffect(() => {
  console.log("route.path", route);
});

function handleClick({ item }) {
  router.push(item.path);
}
</script>

<style scoped>
.logo {
  height: var(--header-height);
  line-height: var(--header-height);
  text-align: center;
}
.menus {
  height: calc(100% - var(--header-height));
  overflow: auto;
}
</style>
