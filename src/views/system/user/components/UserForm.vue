<template>
  <a-form-item label="手机号" name="phone" :rules="[{ required: true }]">
    <a-input v-model:value="formState.phone"></a-input>
  </a-form-item>
  <a-form-item label="用户名" name="username" :rules="[{ required: true }]">
    <a-input v-model:value="formState.username"></a-input>
  </a-form-item>
  <a-form-item label="状态" name="state" :rules="[{ required: true }]">
    <a-radio-group v-model:value="formState.status" button-style="solid">
      <a-radio-button :value="1">启用</a-radio-button>
      <a-radio-button :value="0">禁用</a-radio-button>
    </a-radio-group>
  </a-form-item>
</template>

<script setup lang="ts">
const formState = defineModel<any>("formState");
</script>
