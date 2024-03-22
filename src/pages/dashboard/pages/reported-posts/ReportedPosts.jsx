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

function ReportedPosts() {
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

  const onFinishDeactive = async () => {
    if (reason.trim().length == 0) {
      alertFail("Please input a reason!");
    } else {
      try {
        const response = await api.put("/responseReport", {
          id: id,
          status: "REJECT",
          reasonReject: reason,
        });

        setModal2Open(false);
        alertSuccess("Reject reported post successfully!");
        getAllByRole();
      } catch (error) {
        alertFail(error.response.data);
      }
    }
  };
  const onFinishActive = async () => {
    try {
      const response = await api.put(`/responseReport`, {
        id: id,
        status: "APPROVE",
      });
      setModal1Open(false);
      alertSuccess("Approve reported post successfully!");
      getAllByRole();
    } catch (error) {
      alertFail(error.response.data);
    }
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
        <Link to={artwork ? "/artworkDetails/" + artwork.id : ""}>
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
      title: "Action",
      key: "action",
      filters: [
        { text: "Active", value: false },
        { text: "Deactive", value: true },
      ],
      onFilter: (value, record) => record.deActive === value,

      render: (_, record) => {
        return (
          <>
            <Button
              style={{
                backgroundColor: "rgba(92, 177, 84, 0.1)",
                color: "rgba(92, 177, 84, 1)",
                fontFamily: "MediumCereal",
                border: "2px solid rgba(92, 177, 84, 1)",
                height: "3em",
                padding: "0 1.5em",
                marginRight: "0.5em",
              }}
              onClick={() => {
                setId(record.id);
                setModal1Open(true);
              }}
            >
              Approve
            </Button>
            <Button
              style={{
                backgroundColor: "rgba(177, 84, 84, 0.1)",
                color: "rgba(177, 84, 84, 1)",
                fontFamily: "MediumCereal",
                border: "2px solid rgba(177, 84, 84, 1)",
                height: "3em",
                padding: "0 1.5em",
              }}
              onClick={() => {
                setId(record.id);
                setName(record.username);
                setModal2Open(true);
              }}
            >
              Reject
            </Button>
          </>
        );
      },
    },
  ].filter((item) => !item.hidden);

  const getAllByRole = async () => {
    try {
      const response = await api.get("/adminReports");
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
      <Table
        columns={columns}
        dataSource={allUsers?.filter(
          (value) => value?.statusReport == "REPORTARTWORK"
        )}
        pagination={{
          defaultPageSize: 4,
          showSizeChanger: true,
          pageSizeOptions: ["2", "4"],
        }}
      />
      <Modal
        title="Confirm to approve report artwork"
        centered
        open={modal1Open}
        footer={null}
        onCancel={() => setModal1Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <h3>Are you sure to approve report this artwork?</h3>
          <br />
          <label>ID</label>
          <Input value={id} disabled />
          <Button
            style={{ marginTop: "1em" }}
            type="primary"
            htmlType="submit"
            onClick={onFinishActive}
          >
            Submit
          </Button>
        </Form>
      </Modal>
      <Modal
        title="Confirm to reject report artwork"
        centered
        open={modal2Open}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <label>Are you sure to reject report this artwork?</label>
          <br />
          <label>ID</label>
          <Input value={id} disabled />
          <label>Reason</label>

          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="Please give us a reason!"
            style={{
              height: 120,
              resize: "none",
              marginBottom: "1.5em",
            }}
          />
          <Button type="primary" htmlType="submit" onClick={onFinishDeactive}>
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default ReportedPosts;
