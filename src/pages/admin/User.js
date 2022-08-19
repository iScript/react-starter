import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "name",
  },
  {
    title: "操作",

    render: (_, record) => (
      <Space size="middle">
        <a>修改 </a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    id: 1,
    name: "John Brown",
  },
  {
    key: "2",
    id: 2,
    name: "John Brown",
  },
];

export default function User() {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
