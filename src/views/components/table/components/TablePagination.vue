<template>
  <a-typography-paragraph> useTablePagination 组合式函数的使用 </a-typography-paragraph>
  <a-table :columns="columns" :pagination="pagination" :dataSource="dataSource"></a-table>
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
