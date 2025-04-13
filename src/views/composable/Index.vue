<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <Clock />
      </a-col>
      <a-col :span="8">
        <SMS />
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import Clock from "./conponents/Clock.vue";
import SMS from "./conponents/SMS.vue";
import { isJson } from "@/utils/validate";

console.log(isJson("{1: 1}"));
</script>
