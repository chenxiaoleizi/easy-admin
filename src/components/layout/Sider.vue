<template>
  <a-layout-sider v-model:collapsed="collapsed" class="side shadow-md" theme="light" :width="200">
    <div class="logo">LOGO</div>
    <div class="menus">
      <a-menu
        id="dddddd"
        mode="inline"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :items="items"
        @click="handleClick"
      ></a-menu>
    </div>
    <div class="menu-fold">
      <a-button @click="collapsed = !collapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePermissionStore } from "@/store/permission";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();
const permission = usePermissionStore();

const collapsed = ref(false);
const openKeys = ref<string[]>([]);
const selectedKeys = ref<string[]>([]);
const items = computed(() => permission.menuItems);

function handleClick({ item }: { item: any }) {
  router.push(item.path);
}

function setKeys() {
  const matched = route.matched.filter((item) => item.path);
  openKeys.value = matched.map((item) => {
    const found = permission.permissionMap.get(item.path);
    return found ? `${found.id}` : "";
  });

  const last = openKeys.value[openKeys.value.length - 1];
  selectedKeys.value = [`${last}`];
}

setKeys();
</script>

<style scoped>
.side {
  width: 200px;
  position: relative;
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
