<template>
  <div>
    table
    <ul>
      <li>自定义table的样式</li>
      <li>useTablePagination 组合函数</li>
      <li>滚到底部加载更多</li>
    </ul>
    <TablePagination />
    <TableSelection />
    <TableScroll />
  </div>
</template>

<script setup lang="ts">
import TablePagination from "./components/TablePagination.vue";
import TableSelection from "./components/TableSelection.vue";
import TableScroll from "./components/TableScroll.vue";
</script>
