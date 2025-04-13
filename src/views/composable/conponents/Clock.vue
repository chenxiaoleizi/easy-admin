<template>
  <a-card :bordered="true" title="实时时间">
    {{ realtime }}
  </a-card>
</template>

<script setup lang="ts">
import { useClock } from "@/composables";

const realtime = useClock("YYYY-MM-DD HH:mm:ss");
</script>
