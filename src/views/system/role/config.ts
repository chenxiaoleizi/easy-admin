import { getRoleList } from "@/api/user";

export const searchConfig = [
  {
    type: "a-input",
    label: "角色名称",
    name: "rolename",
    value: undefined,
    props: {
      placeholder: "请输入角色名称"
    }
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
          value: 0
        },
        {
          label: "启用",
          value: 1
        }
      ]
    }
  }
];

export const tableConfig = {
  columns: [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
      align: "center"
    },
    {
      title: "角色名称",
      dataIndex: "rolename",
      key: "rolename",
      align: "center"
    },
    {
      title: "角色状态",
      dataIndex: "state",
      key: "state",
      align: "center",
      customRender({ text }) {
        return text === 0 ? "禁用" : "启用";
      }
    },
    {
      title: "备注",
      dataIndex: "remark",
      key: "remark",
      align: "center"
    },
    {
      title: "操作",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      actions: [
        {
          label: "添加",
          name: "add"
        },
        {
          label: "编辑",
          name: "edit"
        },
        {
          label: "删除",
          name: "delete"
        }
      ]
    }
  ],
  fetchDataSourceFn: getRoleList
};
