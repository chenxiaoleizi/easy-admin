<template>
  <a-modal v-model:open="open" title="分配权限">
    <div class="my-[20px]">
      <a-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:checkedKeys="checkedKeys"
        checkable
        :tree-data="treeData"
        :fieldNames="{ title: 'name', key: 'id' }"
      />
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { TreeProps } from "ant-design-vue";

const treeData = [
  {
    id: "/",
    name: "首页",
    icon: "home",
    path: "/",
    children: [
      {
        id: "/home",
        name: "首页",
        icon: "home",
        path: "/",
      },
    ],
  },
  {
    id: "/system",
    name: "系统设置",
    icon: "settings",
    path: "/system",
    children: [
      {
        id: "/system/userList",
        name: "用户列表",
        icon: "users",
        path: "/system/userList",
      },
      {
        id: "/system/roleList",
        name: "角色列表",
        icon: "role",
        path: "/system/roleList",
      },
      {
        id: "/system/menuList",
        name: "菜单列表",
        icon: "menu",
        path: "/system/menuList",
      },
    ],
  },
  {
    id: "/composable",
    name: "组合式函数",
    icon: "home",
    path: "/",
    children: [
      {
        id: "/composable",
        name: "组合式函数",
        icon: "home",
        path: "/composable",
      },
    ],
  },
  {
    id: "/components",
    name: "组件",
    icon: "home",
    path: "/components",
    children: [
      {
        id: "/components/table",
        name: "表格",
        icon: "home",
        path: "/components/table",
      },
      {
        id: "/components/tree",
        name: "树",
        icon: "home",
        path: "/components/tree",
      },
      {
        id: "/components/upload",
        name: "上传",
        icon: "home",
        path: "/components/upload",
      },
    ],
  },
];

const expandedKeys = ref<string[]>(["0-0-0", "0-0-1"]);
const selectedKeys = ref<string[]>(["0-0-0", "0-0-1"]);
const checkedKeys = ref<string[]>(["0-0-0", "0-0-1"]);
watch(expandedKeys, () => {
  console.log("expandedKeys", expandedKeys);
});
watch(selectedKeys, () => {
  console.log("selectedKeys", selectedKeys);
});
watch(checkedKeys, () => {
  console.log("checkedKeys", checkedKeys);
});

const open = ref(false);
function show() {
  open.value = true;
}

defineExpose({ show });
</script>
