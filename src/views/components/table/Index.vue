<template>
  <div>
    <a-space direction="vertical">
      <TablePagination />
      <TableSelection />
      <TableScroll />
    </a-space>
  </div>
</template>

<script setup lang="ts">
import TablePagination from "./components/TablePagination.vue";
import TableSelection from "./components/TableSelection.vue";
import TableScroll from "./components/TableScroll.vue";
</script>
