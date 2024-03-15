import React from "react";
import { Avatar, Space, Table, Tag } from "antd";
import "./TransactionHistory.scss";
import {
  FallOutlined,
  RiseOutlined,
  RollbackOutlined,
  SwapOutlined,
} from "@ant-design/icons";
const columns = [
  {
    title: "Invoice Number",
    dataIndex: "invoiceId",
    key: "invoiceId",
  },
  {
    title: "Transfer To",
    dataIndex: "user",
    key: "user",
    render: ({ avatar, name }) => (
      <a>
        {avatar ? (
          <Avatar style={{ marginRight: "0.5em" }} src={avatar || ""} />
        ) : null}
        {name}
      </a>
    ),
  },
  {
    title: "Account Number",
    dataIndex: "accNum",
    key: "accNum",
  },
  {
    title: "Account Name",
    dataIndex: "accName",
    key: "accName",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tag) => (
      <Tag
        color={
          tag == "Deposit"
            ? "green"
            : tag == "Withdraw"
            ? "volcano"
            : tag == "Transfer"
            ? "geekblue"
            : "yellow"
        }
        key={tag}
      >
        {tag}
      </Tag>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: ({ amount, tag }) => (
      <p style={{ fontFamily: "MediumCereal" }}>
        {tag == "Withdraw" ? (
          <FallOutlined style={{ color: "red", marginRight: "0.5em" }} />
        ) : tag == "Deposit" ? (
          <RiseOutlined style={{ color: "green", marginRight: "0.5em" }} />
        ) : tag == "Transfer" ? (
          <SwapOutlined style={{ color: "blue", marginRight: "0.5em" }} />
        ) : (
          <RollbackOutlined style={{ color: "yellow", marginRight: "0.5em" }} />
        )}{" "}
        {amount}
      </p>
    ),
  },
];
const data = [
  {
    key: "1",
    user: {},
    accNum: 32,
    accName: "DO VAN MINH",
    tags: "Withdraw",
    invoiceId: "#3939",
    amount: { tag: "Withdraw", amount: "10.5$" },
  },
  {
    key: "2",
    user: {
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/swp-asp.appspot.com/o/D722250E-0FB3-4D1E-923E-F49BDEDE0259.jpeg?alt=media&token=cc5a2590-9ad2-46fe-9686-761e625f9009",
      name: "Hong Thinh",
    },
    accNum: 42,
    accName: "DO VAN MINH",
    tags: "Transfer",
    invoiceId: "#3940",
    amount: { tag: "Transfer", amount: "32.9$" },
  },
  {
    key: "3",
    user: {},
    accNum: 32,
    accName: "DO VAN MINH",
    tags: "Deposit",
    invoiceId: "#3941",
    amount: { tag: "Deposit", amount: "94.1$" },
  },
];
const TransactionHistory = () => (
  <div className="transaction-history">
    <h1>Transation History</h1>
    <Table
      style={{ fontFamily: "MediumCereal" }}
      columns={columns}
      dataSource={data}
    />
  </div>
);
export default TransactionHistory;
