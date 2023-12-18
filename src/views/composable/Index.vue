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
        <a-card title="v-model 指令" :bordered="false">
          <p>
            通常我们会将一些业务组件封装成一个弹窗，比如添加用户的弹窗,
            此时我们可以通过 useVModel 函数来实现弹窗显示的双向绑定
          </p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false"> </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useClock } from "@/composables/index";

const clock = useClock();
</script>
