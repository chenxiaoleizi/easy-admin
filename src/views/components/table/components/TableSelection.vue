<template>
  <a-card title="useTableRowSelection 组合式函数">
    <a-table
      rowKey="id"
      :columns="columns"
      :rowSelection="rowSelection"
      :dataSource="dataSource"
    ></a-table>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTableRowSelection } from "@/composables/index.ts";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
  },
];
const rowSelection = useTableRowSelection();
const dataSource = ref([
  { name: "neo", id: 1 },
  { name: "leo", id: 2 },
]);
</script>
