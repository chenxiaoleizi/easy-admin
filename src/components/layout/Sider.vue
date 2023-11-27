<template>
  <a-layout-sider theme="light">
    <div class="logo">LOGO</div>
    <div class="menus">
      <a-menu
        v-model:openKeys="openKeys"
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
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/store/user";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const openKeys = ref<string[]>([]);
const selectedKeys = ref<string[]>([]);
const items = computed(() => {
  return userStore.menuData;
});

setOpenKeys();
setSelectedKeys();

function setOpenKeys() {
  openKeys.value = route.matched.map((item) => item.path);
}

function setSelectedKeys() {
  selectedKeys.value = [route.path];
}

function handleClick({ item }) {
  console.log(item);
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
