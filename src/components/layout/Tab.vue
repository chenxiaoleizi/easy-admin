<template>
  <div class="tabs">
    <a-tabs
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
      size="small"
      :tabBarStyle="{ marginBottom: 0 }"
      @tabClick="handleClick"
      @edit="handleEdit"
    >
      <a-tab-pane
        v-for="tab in tabs"
        :key="tab.path"
        :tab="tab.meta.title"
        :closable="!tab.meta.noClose"
      />

      <template #rightExtra>
        <a-dropdown>
          <a-button><DownOutlined /></a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="handleCloseLeft">关闭左侧标签</a-menu-item>
              <a-menu-item @click="handleCloseRight">关闭右侧标签</a-menu-item>
              <a-menu-item @click="handleCloseOther">关闭其它标签</a-menu-item>
              <a-menu-item @click="handleCloseAll">关闭所有标签</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useTabStore } from "@/store/tab";
import { usePermissionStore } from "@/store/permission";
const route = useRoute();
const router = useRouter();
const tabStore = useTabStore();
const { tabs } = storeToRefs(tabStore);
const { firstMenu } = storeToRefs(usePermissionStore());

const activeKey = ref(route.path);

function handleClick(key: string) {
  if (activeKey.value === key) return;
  router.push(key);
}
function handleEdit(key: string) {
  const removedIndex = tabStore.removeTab(key);

  // 关闭的是当前选中的 tab，自动选中它左侧的 tab
  if (activeKey.value === key) {
    const leftTab = tabs.value[removedIndex - 1];
    activeKey.value = leftTab.path;
    handleClick(leftTab.path);
  }
}
function handleCloseLeft() {
  tabStore.removeLeftTabs(activeKey.value);
}
function handleCloseRight() {
  tabStore.removeRightTabs(activeKey.value);
}
function handleCloseOther() {
  tabStore.removeOtherTabs(activeKey.value);
}
function handleCloseAll() {
  tabStore.clearTab();

  // 关闭所有后选中第一个标签
  const fixedTab = tabs.value[0];
  activeKey.value = fixedTab.path;
  handleClick(fixedTab.path);
}

function initFixedTab() {
  const routes = router.getRoutes();
  for (let route of routes) {
    if (route.path === firstMenu.value.path) {
      route.meta.noClose = true;
      tabStore.addTab(route);
      break;
    }
  }
}
initFixedTab();

watch(
  () => route.fullPath,
  () => {
    tabStore.addTab(route);
    activeKey.value = route.path;
  },
  { immediate: true }
);
</script>

<style scoped>
.tabs {
  background: white;
  padding: 0 16px;
}
:deep(.ant-tabs-content-holder) {
  display: none;
}
</style>
