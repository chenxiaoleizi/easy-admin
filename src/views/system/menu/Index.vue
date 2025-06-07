<template>
  <div>
    <a-card>
      <a-table :columns="columns" :dataSource="dataSource" :pagination="false">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'operation'">
            <a-button class="px-0" type="link" @click="handleAdd(record)">添加</a-button>
            <a-divider type="vertical" />
            <a-button class="px-0" type="link" @click="handleEdit(record)">编辑</a-button>
            <a-divider type="vertical" />
            <a-button class="px-0" type="link" danger>删除</a-button>
          </template>
        </template>
      </a-table>
    </a-card>
    <MenuModal ref="menuModalRef"></MenuModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuModal from "./components/MenuModal.vue";
import { getMenuList } from "@/api/user";

const columns = [
  {
    title: "菜单名称",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "路径",
    dataIndex: "path",
    key: "path",
    width: "20%",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    align: "center",
    width: 260,
  },
];

const dataSource = ref();
function fetchData() {
  getMenuList().then((res) => {
    const list = res?.list ?? [];
    dataSource.value = list;
  });
}

const menuModalRef = ref();
function handleAdd(record: any) {}
function handleEdit(record: any) {
  menuModalRef.value.showModal("add");
}

fetchData();
</script>
