<template>
  <a-card :bordered="true" title="短信验证码倒计时">
    <a-space>
      <a-input placeholder="请输入短信验证码" />
      <a-button type="primary" :disabled="isCounting" @click="handleSend">
        {{ isCounting ? `${current}s` : "发送短信验证码" }}
      </a-button>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import { useCountdown } from "@/composables";

const { startCountdown, isCounting, current } = useCountdown(10);
function handleSend() {
  startCountdown();
}
</script>
