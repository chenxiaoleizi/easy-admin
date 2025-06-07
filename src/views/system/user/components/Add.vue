<template>
  <a-modal v-model:open="open" title="添加用户" @ok="handleOk" @cancel="handleCancel">
    <div class="my-[20px]">
      <a-form
        ref="formRef"
        :model="formState"
        :label-col="{ style: { width: '70px' } }"
        autocomplete="off"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <UserForm v-model:form-state="formState"></UserForm>
      </a-form>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import UserForm from "./UserForm.vue";

const formState = reactive({
  phone: "",
  username: "",
  status: 1,
});
const formRef = ref();
async function handleOk() {
  await formRef.value.validate();
}
function handleCancel() {}

const open = ref(false);
function showModal() {
  open.value = true;
}

defineExpose({ showModal });
</script>
