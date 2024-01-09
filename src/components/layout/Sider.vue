<template>
  <a-layout-sider v-model:collapsed="collapsed" class="side" theme="light">
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
    <div class="menu-fold">
      <a-button @click="handleClickFold">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useRouteStore } from "@/store/route";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();
const routeStore = useRouteStore();

const collapsed = ref(false);
const openKeys = ref<string[]>([]);
const selectedKeys = ref<string[]>([]);
const items = computed(() => {
  return routeStore.menuData;
});

setOpenKeys();
setSelectedKeys();

function setOpenKeys() {
  openKeys.value = route.matched.map((item) => item.path);
}

function setSelectedKeys() {
  selectedKeys.value = [route.path];
}

function handleClick({ item }: { item: any }) {
  router.push(item.path);
}

function handleClickFold() {
  collapsed.value = !collapsed.value;
}
</script>

<style scoped lang="less">
.side {
  position: relative;
  border-right: 1px solid @colorBorder;
}
.logo {
  height: var(--header-height);
  line-height: var(--header-height);
  text-align: center;
}
.menus {
  height: calc(100% - var(--header-height) - 40px);
  overflow: auto;
}
.menu-fold {
  line-height: 40px;
  text-align: center;
}
</style>
@/store/route
