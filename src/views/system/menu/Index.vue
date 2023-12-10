<template>
  <div>
    <Table
      :table-config="tableConfig"
      @click-action="handleClickAction"
    ></Table>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/table/Index.vue";
import { tableConfig } from "./config";

function handleClickAction(action: { label: string; name: string }) {
  console.log(action);
}
</script>
