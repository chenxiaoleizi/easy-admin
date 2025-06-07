<template>
  <div class="easy-table-query">
    <a-form ref="formRef" layout="inline" :model="queryFormState" autocomplete="off">
      <slot></slot>
      <a-form-item>
        <a-button @click="handleReset">重置</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleQuery">查询</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ queryFormState: any }>();
const emit = defineEmits(["reset", "query"]);
const formRef = ref();

function handleReset() {
  emit("reset");
  formRef.value.resetFields();
}
function handleQuery() {
  emit("query");
}
</script>

<style scoped>
.easy-table-query {
  min-height: 52px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: white;
  /* padding: 10px 10px 0; */
}
.easy-table-query :deep(.ant-form-item) {
  margin-bottom: 10px;
}
</style>
