<template>
  <a-card title="useTablePagination 组合式函数">
    <a-table :columns="columns" :pagination="pagination" :dataSource="dataSource"></a-table>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTablePagination } from "@/composables/index.ts";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
  },
];
const pagination = useTablePagination(fetchData);
const dataSource = ref();
function fetchData() {
  const params = {
    current: pagination.current,
    pageSize: pagination.pageSize,
  };

  dataSource.value = [{ name: "neo" }];
  pagination.total = 20;
  console.log("请求表格数据");
}
fetchData();
</script>
