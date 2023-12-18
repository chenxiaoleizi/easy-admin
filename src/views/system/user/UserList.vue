<template>
  <div>
    <Table
      :search-config="searchConfig"
      :table-config="tableConfig"
      @click-action="handleClickAction"
    ></Table>
    <Add v-model:open="open"></Add>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/table/Index.vue";
import Add from "./components/Add.vue";
import { searchConfig, tableConfig } from "./config";

const open = ref(false);

function handleClickAction(action: { label: string; name: string }) {
  if (action.name === "add") {
    open.value = true;
  }
}
</script>
