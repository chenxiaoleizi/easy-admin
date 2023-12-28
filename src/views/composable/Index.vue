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
        <a-card title="数据是否被修改" :bordered="false">
          <p>useIsModified</p>
          <p>
            我们在编辑表单时可能会有这样的需求，当离开当前编辑页时，如果表单数据被修改了，需要弹窗提醒用户“您修改的数据不会被保存”，此时就需要将新的表单数据和旧的表单数据进行对比。
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
