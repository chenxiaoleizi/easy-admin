<template>
  <div class="search-form">
    <a-form
      v-model="formState"
      :label-col="{
        span: 6
      }"
    >
      <a-row :gutter="[20, 10]" :wrap="true">
        <a-col
          v-for="item in searchConfig"
          :key="item.name"
          class="gutter-row"
          :span="6"
        >
          <a-form-item :label="item.label" :name="item.name">
            <component
              :is="item.type"
              v-model:value="formState[item.name]"
              v-bind="item.props"
            ></component>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <a-space>
      <a-button type="primary" @click="handleClickSearch">搜索</a-button>
      <a-button @click="handleClickReset">重置</a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

type FormState = {
  [key: string]: any;
};

const props = defineProps<{
  searchConfig: any[];
}>();
const emit = defineEmits(["search", "reset"]);
const formState = reactive<FormState>({});

setFormState();

function setFormState() {
  props.searchConfig.forEach((item) => {
    formState[item.name] = item.value ?? undefined;
  });
}

function handleClickSearch() {
  emit("search", formState);
}
function handleClickReset() {
  props.searchConfig.forEach((item) => {
    formState[item.name] = undefined;
  });
  emit("search", formState);
}
</script>

<style scoped>
.search-form {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: white;
  padding: 10px;
  margin-bottom: 10px;
}
.search-form:deep(.ant-form-item) {
  margin-bottom: 0;
}
</style>
