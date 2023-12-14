<template>
  <div>
    <Table
      :search-config="searchConfig"
      :table-config="tableConfig"
      @click-action="handleClickAction"
    ></Table>
    <Add></Add>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/table/Index.vue";
import Add from "./components/Add.vue";
import { searchConfig, tableConfig } from "./config";

function handleClickAction(action: { label: string; name: string }) {
  console.log(action);
}
</script>
