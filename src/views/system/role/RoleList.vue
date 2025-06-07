<template>
  <div>
    <a-card>
      <TableQuery :query-form-state="queryForm">
        <a-form-item label="角色名" name="username">
          <a-input v-model:value="queryForm.username" placeholder="请输入角色名"></a-input>
        </a-form-item>
      </TableQuery>
      <TableHeader>
        <template #left>角色列表</template>
        <template #right>
          <a-button type="primary" @click="handleAdd">添加角色</a-button>
        </template>
      </TableHeader>
      <a-table :columns="columns" :dataSource="dataSource" :pagination="pagination">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'operation'">
            <a-space>
              <a-button class="px-0" type="link" @click="handleEdit(record)">编辑</a-button>
              <a-button class="px-0" type="link" @click="handleAssign(record)">分配权限</a-button>
              <a-button class="px-0" type="link" danger>删除</a-button>
            </a-space>
          </template>
        </template>
      </a-table>
    </a-card>
    <Add ref="addRef"></Add>
    <Edit ref="editRef"></Edit>
    <Assign ref="assignRef"></Assign>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useTablePagination } from "@/composables/index";
import { getRoleList } from "@/api/setting/role";
import TableQuery from "@/components/table/TableQuery.vue";
import TableHeader from "@/components/table/TableHeader.vue";
import Add from "./components/Add.vue";
import Edit from "./components/Edit.vue";
import Assign from "./components/Assign.vue";

const columns = [
  {
    title: "角色名称",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "角色描述",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: "center",
    width: 200,
  },
];

const queryForm = reactive({
  username: "",
  account: "",
});
const pagination = useTablePagination(fetchData);
const dataSource = ref();
function queryData() {
  pagination.current = 1;
  fetchData();
}
function fetchData() {
  const params = {
    ...queryForm,
    pageSize: pagination.pageSize,
    current: pagination.current,
  };
  getRoleList().then((res) => {
    const list = res?.list ?? [];
    console.log(list);
    dataSource.value = list;
    pagination.total = 100;
  });
}

const addRef = ref();
const editRef = ref();
const assignRef = ref();
function handleAdd() {
  addRef.value.showModal();
}
function handleEdit(record: any) {
  editRef.value.showModal(record);
}
function handleAssign(record: any) {
  assignRef.value.show();
}

fetchData();
</script>

<style scoped>
.table-query {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.table-query-left {
  display: flex;
  max-width: 70%;
}
</style>
