import { getMenuList } from "@/api/user";

export const searchConfig = [
  {
    type: "a-input",
    label: "角色名称",
    name: "rolename",
    value: undefined,
    props: {
      placeholder: "请输入角色名称",
    },
  },
  {
    type: "a-select",
    label: "角色状态",
    name: "state",
    props: {
      placeholder: "请选择角色状态",
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

export const tableConfig = {
  columns: [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 100,
    },
    {
      title: "菜单名称",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
    {
      title: "路径",
      dataIndex: "path",
      key: "path",
      align: "center",
    },
    {
      title: "操作",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      width: 260,
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
  indentSize: 50,
  fetchDataSourceFn: getMenuList,
};
