import { getUserList } from "@/api/user";

export const searchConfig = [
  {
    type: "a-input",
    label: "姓名",
    name: "userName",
    value: undefined,
    props: {
      placeholder: "请输入姓名"
    }
  },
  {
    type: "a-select",
    label: "人员类型",
    name: "age",
    props: {
      options: [
        {
          label: "1",
          value: 1
        }
      ]
    }
  },
  {
    type: "a-input",
    label: "办公室",
    name: "age1",
    props: {}
  },
  {
    type: "a-input",
    label: "办公室",
    name: "age2",
    props: {}
  }
];

export const tableConfig = {
  columns: [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align: "center"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      align: "center"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
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
          label: "删除",
          name: "delete"
        },
        {
          label: "编辑",
          name: "edit"
        }
      ]
    }
  ],
  fetchDataSourceFn: getUserList
};
