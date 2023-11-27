import { getUserList } from "@/api/user";

export const searchConfig = [
  {
    type: "a-input",
    label: "姓名",
    name: "userName",
    props: {}
  },
  {
    type: "a-input",
    label: "年龄",
    name: "age",
    props: {}
  }
];

export const tableConfig = {
  columns: [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ],
  fetchDataSourceFn: getUserList
};
