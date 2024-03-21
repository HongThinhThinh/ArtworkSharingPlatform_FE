import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import "./Revenue.scss";
import {
  FallOutlined,
  RiseOutlined,
  RollbackOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { alertFail } from "../../assets/hook/useNotification";
import api from "../../config/axios";

function Revenue({ transaction }) {
  const [userData, setUserData] = useState();
  const [dataTrans, setDataTrans] = useState([]);
  const [id, setId] = useState("");
  const [month, setMonth] = useState(0);
  const [form] = Form.useForm();
  const [totalRevenueMonth, setTotalRevenueMonth] = useState(0);
  const [year, setYear] = useState(Number(new Date().getFullYear()));
  const onFinish = (value) => {
    setYear(value.year);
  };
  const onFinishFailed = () => {};

  const getTransaction = async () => {
    try {
      const response = await api.get(`/ProfitByMonth?year=${year}`);

      setDataTrans(response.data.data[month].systemProfits);
      setTotalRevenueMonth(response.data.data[month].revenuePortal);
    } catch (e) {
      alertFail(e.response.data);
    }
  };

  const handleChange = (value) => {
    setMonth(value);
  };

  useEffect(() => {
    getTransaction();
  }, [month, year]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "From",
      dataIndex: "userForm",
      key: "userForm",
      render: (user) => (
        <a>
          {user ? (
            <Avatar style={{ marginRight: "0.5em" }} src={user?.avt || ""} />
          ) : null}
          {user?.name}
        </a>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        var transactionDate = date ? date : "";
        var year = transactionDate.substring(0, 4);
        var month = transactionDate.substring(4, 6) - 1; // Month in JavaScript Date object is 0-indexed
        var day = transactionDate.substring(6, 8);
        var hour = transactionDate.substring(8, 10);
        var minute = transactionDate.substring(10, 12);
        var second = transactionDate.substring(12, 14);

        var date = new Date(
          year,
          month,
          day,
          hour,
          minute,
          second
        ).toDateString();
        return <p>{date}</p>;
      },
    },

    {
      title: "Package",
      dataIndex: "balance",
      key: "balance",
      render: (amount) => (
        <p style={{ fontFamily: "MediumCereal" }}>{amount}$</p>
      ),
    },
  ];

  return (
    <div className="revenue">
      <div className="revenue__header">
        <h1>Total Revenue Of Month: {totalRevenueMonth}$</h1>
        <Select
          defaultValue="January"
          style={{
            width: 120,
            fontFamily: "MediumCereal",
          }}
          onChange={handleChange}
          options={[
            {
              value: 0,
              label: "January",
            },
            {
              value: 1,
              label: "February",
            },
            {
              value: 2,
              label: "March",
            },
            {
              value: 3,
              label: "April",
            },
            {
              value: 4,
              label: "May",
            },
            {
              value: 5,
              label: "June",
            },
            {
              value: 6,
              label: "July",
            },
            {
              value: 7,
              label: "August",
            },
            {
              value: 8,
              label: "September",
            },
            {
              value: 9,
              label: "October",
            },

            {
              value: 10,
              label: "November",
            },
            {
              value: 11,
              label: "December",
            },
          ]}
        />
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{
            display: "flex",
            alignItems: "center",
            transform: "translateY(0.8em)",
          }}
        >
          <Form.Item
            initialValue={Number(new Date().getFullYear())}
            name="year"
            rules={[
              {
                required: true,
              },
              {
                type: "number",
                warningOnly: true,
              },
              {
                type: "number",
                min: 1,
              },
            ]}
          >
            <InputNumber placeholder="input placeholder" />
          </Form.Item>
          <Form.Item style={{ marginLeft: "1em" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ fontFamily: "MediumCereal" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        style={{ fontFamily: "MediumCereal" }}
        columns={columns}
        dataSource={dataTrans}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["4", "8"],
        }}
      />
    </div>
  );
}

export default Revenue;
