import { Avatar, Button, Drawer, Input, Modal, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import api from "../../../../config/axios";
import TextArea from "antd/es/input/TextArea";
import {
  alertFail,
  alertSuccess,
} from "../../../../assets/hook/useNotification";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { GoDotFill } from "react-icons/go";
import { MdOutlineBlock } from "react-icons/md";
import ImgPreview from "../../../Image/Image";

function ReportHistory() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [reason, setReason] = useState("");
  const onChange = (e) => {
    setReason(e.target.value);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "To Post",
      dataIndex: "artwork",
      key: "artwork",
      render: (artwork) => (
        <Link
          style={{ color: "blueviolet", textDecoration: "underline" }}
          to={artwork ? "/artworkDetails/" + artwork.id : ""}
        >
          {artwork ? artwork.title : ""}
        </Link>
      ),
    },
    {
      title: "Title",
      dataIndex: "tittle",
      key: "tittle",
    },
    {
      title: "Description",
      dataIndex: "discription",
      key: "discription",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
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
      title: "To",
      dataIndex: "artwork",
      key: "artwork",
      render: (artwork) => (
        <a>
          {artwork ? (
            <Avatar
              style={{ marginRight: "0.5em" }}
              src={artwork?.user.avt || ""}
            />
          ) : null}
          {artwork?.user.name}
        </a>
      ),
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        var transactionDate = date;
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
      title: "Evidence",
      dataIndex: "image",
      key: "image",
      render: (artwork) => (
        <ImgPreview
          style={{ height: "150px", objectFit: "cover" }}
          src={artwork ? artwork : ""}
        />
      ),
    },
    {
      title: "Status",
      key: "statusReport",
      dataIndex: "statusReport",
      render: (tag) => (
        <Tag
          color={
            tag == "REPORTARTWORK"
              ? "geekblue"
              : tag == "APPROVE"
              ? "green"
              : tag == null
              ? "geekblue"
              : "volcano"
          }
          key={tag}
        >
          {tag == "REPORTARTWORK"
            ? "Pending"
            : tag == "APPROVE"
            ? "Approve"
            : tag == null
            ? "pending"
            : "Reject"}
        </Tag>
      ),
    },
    {
      title: "Reason Reject",
      dataIndex: "artwork",
      key: "artwork",
      render: (artwork) => <p>{artwork ? artwork.reasonReject : ""}</p>,
    },
  ].filter((item) => !item.hidden);

  const getAllByRole = async () => {
    try {
      const response = await api.get("/userReports");
      setAllUsers(response.data.data);
      const { activeCount, deactiveCount } = response.data.data.reduce(
        (counts, user) => {
          if (user.deActive) {
            counts.deactiveCount++;
          } else {
            counts.activeCount++;
          }
          return counts;
        },
        { activeCount: 0, deactiveCount: 0 }
      );
    } catch (e) {
      alertFail("Fail to load");
    }
  };

  useEffect(() => {
    getAllByRole();
  }, [allUsers]);

  return (
    <div style={{ padding: "1.5em", height: "100%", overflowY: "scroll" }}>
      <h1
        style={{
          fontFamily: "BoldCereal",
          fontSize: "1.2em",
          marginBottom: "1.5em",
        }}
      >
        History Reported Post
      </h1>
      <Table
        columns={columns}
        dataSource={allUsers}
        pagination={{
          defaultPageSize: 4,
          showSizeChanger: true,
          pageSizeOptions: ["2", "4"],
        }}
      />
    </div>
  );
}

export default ReportHistory;
