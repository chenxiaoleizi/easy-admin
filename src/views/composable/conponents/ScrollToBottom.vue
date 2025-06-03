<template>
  <a-card :bordered="true" title="实时时间">
    <div class="scroll-container" ref="scrollContainerRef">
      <div class="scroll-content"></div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import { useScrollToBottom } from "@/composables";

const scrollContainerRef = ref();
const { isAtBottom } = useScrollToBottom(scrollContainerRef, () => {
  message.success("滚动底部了");
});
</script>

<style scoped>
.scroll-container {
  height: 100px;
  overflow-y: auto;
}
.scroll-content {
  height: 200px;
  background: skyblue;
}
</style>
