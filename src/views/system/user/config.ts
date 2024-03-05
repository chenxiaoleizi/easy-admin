import type { ColumnType } from "ant-design-vue/es/table";
import { getUserList } from "@/api/user";

type TableConfig = {
  columns: ColumnType[];
  fetchDataSourceFn: () => Promise<any>;
};

export const searchConfig = [
  {
    type: "a-input",
    label: "用户名",
    name: "username",
    value: undefined,
    props: {
      placeholder: "请输入用户名",
    },
  },
  {
    type: "a-input",
    label: "账号",
    name: "account",
    props: {
      placeholder: "请输入账号",
    },
  },
  {
    type: "a-select",
    label: "用户状态",
    name: "state",
    props: {
      placeholder: "请选择用户状态",
      options: [
        {
          label: "禁用",
          value: 0,
        },
        {
          label: "启用",
          value: 1,
        },
      ],
    },
  },
];

export const tableConfig: TableConfig = {
  columns: [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
      align: "center",
    },
    {
      title: "账号",
      dataIndex: "account",
      key: "account",
      align: "center",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
      align: "center",
      customRender({ text }: { text: number }) {
        return text === 0 ? "禁用" : "启用";
      },
    },
    {
      title: "操作",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      width: 100,
      actions: [
        {
          label: "添加",
          name: "add",
        },
        {
          label: "编辑",
          name: "edit",
        },
        {
          label: "删除",
          name: "delete",
        },
      ],
    },
  ],
  fetchDataSourceFn: getUserList,
};
