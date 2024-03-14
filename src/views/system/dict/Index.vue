<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-space>
          <a-button danger type="primary">删除</a-button>
          <a-button type="primary">编辑</a-button>
          <a-button type="primary">添加字典项</a-button>
        </a-space>
      </template>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false" bordered>
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'operation'">
            <span class="table-operation">
              <a-space>
                <a-button danger type="text">删除</a-button>
                <a-button type="link">编辑</a-button>
              </a-space>
            </span>
          </template>
        </template>
      </a-table>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { columns, innerColumns } from "./config.ts";
import dayjs from "dayjs";

interface DataItem {
  id: number;
  name: string;
  key: string;
  createTime: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; i++) {
  data.push({
    id: i,
    name: `Screem ${i + 1}`,
    key: "dict-key" + i,
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  });
}

interface innerDataItem {
  id: number;
  key: string;
  value: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    id: i,
    key: "dict-item-key" + i,
    value: "value" + i,
  });
}
</script>
