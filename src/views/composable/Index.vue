<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="实时时间" :bordered="false">
          <p>{{ clock }}</p>
          <div>
            接收参数 format，详细规则见
            <a-button
              type="link"
              href="https://day.js.org/docs/en/display/format"
            >
              https://day.js.org/docs/en/display/format
            </a-button>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Loading 指令" :bordered="false">
          <p>card content</p>
        </a-card>
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
import { useClock } from "@/composables/index";

const clock = useClock();
</script>
