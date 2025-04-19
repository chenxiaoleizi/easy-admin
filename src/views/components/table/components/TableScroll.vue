<template>
  <a-card title="useTableScroll 组合式函数">
    <a-table
      ref="tableRef"
      rowKey="id"
      :columns="columns"
      :dataSource="dataSource"
      :scroll="{ y: 300 }"
    ></a-table>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import { useTableScroll } from "@/composables/index.ts";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
  },
];
const tableRef = ref();
useTableScroll(tableRef, fetchData);
const dataSource = ref([
  { name: "neo", id: 1 },
  { name: "leo", id: 2 },
  { name: "leo", id: 3 },
  { name: "leo", id: 4 },
  { name: "leo", id: 5 },
  { name: "leo", id: 6 },
  { name: "leo", id: 7 },
]);
function fetchData() {
  message.success("滚动到了底部");
}
</script>
