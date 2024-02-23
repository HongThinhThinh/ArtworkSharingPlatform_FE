import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import "./Table.scss";
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    location: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    location: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    location: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    location: "London No. 2 Lake Park",
  },
];
const PostTable = () => {
  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "No.",
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",

      width: 90,
      render: () => <a>Accept</a>,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",

      width: 80,
      render: () => <a>Deny</a>,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",

      width: 80,
      render: () => <a>Detail</a>,
    },
  ];
  return (
    <>
      <Table
        style={{ width: "90%" }}
        columns={columns}
        dataSource={data}
        scroll={{
          x: 900,
        }}
      />
    </>
  );
};
export default PostTable;
