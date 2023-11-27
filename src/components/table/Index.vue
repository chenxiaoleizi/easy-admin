<template>
  <div class="table">
    <SearchForm :search-config="searchConfig"></SearchForm>
    <a-table
      v-bind="tableConfig"
      :data-source="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    ></a-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import SearchForm from "./SearchForm.vue";

const props = defineProps<{
  searchConfig: any[];
  tableConfig: Object;
}>();
const dataSource = ref([]);
const pagination = reactive({
  total: 100,
  current: 1,
  pageSize: 10
});

function handleTableChange(page) {
  const { current, pageSize } = page;
  pagination.current = current;

  const params = {
    current,
    pageSize
  };

  props.tableConfig.fetchDataSourceFn(params).then((res) => {
    const { total, list } = res.data;

    pagination.total = total;
    dataSource.value = list;
  });
}
</script>
