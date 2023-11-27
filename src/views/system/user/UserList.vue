<template>
  <div>
    <Table :search-config="searchConfig" :table-config="tableConfig"></Table>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/table/Index.vue";
import { searchConfig, tableConfig } from "./config";
</script>
