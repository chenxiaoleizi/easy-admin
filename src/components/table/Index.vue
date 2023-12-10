<template>
  <div class="table">
    <SearchForm
      v-if="searchConfig && searchConfig.length > 0"
      :search-config="searchConfig"
      @search="handleSearch"
    ></SearchForm>
    <a-table
      v-bind="tableConfig"
      :data-source="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <template
        v-for="(key, name) in $slots"
        :key="name"
        #[name]="slotProps"
        :k="key"
      >
        <slot :name="name" v-bind="{ ...slotProps }"></slot>

        <!-- 内置的操作按钮渲染 -->
        <template v-if="name === 'bodyCell'">
          <template v-if="renderBuildInActions(slotProps)">
            <Actions
              :actions="slotProps.column.actions"
              @click-action="handleClickAction"
            ></Actions>
          </template>
        </template>
      </template>

      <!-- 父组件如果没有提供插槽内容，在这里渲染内置的操作按钮 -->
      <template v-if="!$slots.bodyCell" #bodyCell="{ column }">
        <template v-if="renderBuildInActions(column)">
          <Actions
            :actions="column.actions"
            @click-action="handleClickAction"
          ></Actions>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import SearchForm from "./SearchForm.vue";
import Actions from "./Actions.vue";

const props = defineProps<{
  searchConfig?: any[];
  tableConfig?: {
    [key: string]: any;
  };
}>();
const emit = defineEmits<{
  clickAction: [{ label: string; name: string }];
}>();

const dataSource = ref([]);
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10
});

getDataSource();

function getDataSource(searchParams = {}) {
  const params = {
    current: pagination.current,
    pageSize: pagination.pageSize
  };

  for (let k in searchParams) {
    if (searchParams[k] !== undefined) {
      params[k] = searchParams[k];
    }
  }

  props.tableConfig
    .fetchDataSourceFn(params)
    .then((res: { data: { total: any; list: any } }) => {
      const { total, list } = res.data;

      pagination.total = total;
      dataSource.value = list;
    });
}

function handleTableChange(page: { current: number; pageSize: number }) {
  const { current, pageSize } = page;
  pagination.current = current;
  pagination.pageSize = pageSize;

  getDataSource();
}

// 是否渲染内置的 action 按钮
function renderBuildInActions(column) {
  return (
    column.dataIndex === "actions" &&
    column.actions &&
    column.actions.length > 0
  );
}

// 顶部搜索
function handleSearch(formState) {
  console.log(formState);
  getDataSource(formState);
}

// 点击 action 按钮
function handleClickAction(action) {
  emit("clickAction", action);
}
</script>
