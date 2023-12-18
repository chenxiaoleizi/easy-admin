<template>
  <a-modal v-model:open="openValue" title="添加用户">
    <Form></Form>
  </a-modal>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useVModel } from "@/composables";
import Form from "./Form.vue";

const props = defineProps<{
  open: boolean;
}>();
const emit = defineEmits(["update:open"]);
const openValue = useVModel(props, "open", emit);

watch(openValue, () => {
  console.log(1);
});
</script>
