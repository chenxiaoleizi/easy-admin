export const columns = [
  { title: "ID", dataIndex: "id", key: "id", align: "center" },
  { title: "字典名称", dataIndex: "name", key: "name", align: "center" },
  { title: "字典key", dataIndex: "key", key: "key", align: "center" },
  { title: "备注", dataIndex: "remark", key: "remark", align: "center" },
  { title: "创建时间", dataIndex: "createTime", key: "key", align: "center", width: 260 },
  { title: "Action", key: "operation", align: "center", width: 300 },
];

export const innerColumns = [
  { title: "id", dataIndex: "id", key: "id" },
  { title: "字典项key", dataIndex: "key", key: "key" },
  { title: "字典项值", dataIndex: "value", key: "value" },
  { title: "创建时间", dataIndex: "createTime", key: "key" },
  {
    title: "Action",
    dataIndex: "operation",
    key: "operation",
    width: 300,
  },
];
