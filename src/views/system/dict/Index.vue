<template>
  <a-table :columns="columns" :data-source="data" class="components-table-demo-nested">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-button type="text">删除</a-button>
        <a-button type="text">编辑</a-button>
        <a-button type="text">添加字典项</a-button>
      </template>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'state'">
            <span>
              <a-badge status="success" />
              Finished
            </span>
          </template>
          <template v-else-if="column.key === 'operation'">
            <span class="table-operation">
              <a-button type="text">删除</a-button>
              <a-button type="text">编辑</a-button>
            </span>
          </template>
        </template>
      </a-table>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";

const columns = [
  { title: "ID", dataIndex: "id", key: "id", align: "center" },
  { title: "字典名称", dataIndex: "name", key: "name", align: "center" },
  { title: "字典key", dataIndex: "key", key: "key", align: "center" },
  { title: "创建时间", dataIndex: "createTime", key: "key", align: "center" },
  { title: "Action", key: "operation", align: "center" },
];

interface DataItem {
  id: number;
  name: string;
  key: string;
  createTime: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    id: i,
    name: `Screem ${i + 1}`,
    key: "iOS",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  });
}

const innerColumns = [
  { title: "id", dataIndex: "id", key: "id", align: "center" },
  { title: "字典项key", key: "key", align: "center" },
  { title: "字典项值", dataIndex: "value", key: "value", align: "center" },
  {
    title: "Action",
    dataIndex: "operation",
    key: "operation",
    align: "center",
  },
];

interface innerDataItem {
  id: number;
  key: string;
  value: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    id: i,
    key: "key" + i,
    value: "value" + i,
  });
}
</script>
