import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import "./ViewWithdraw.scss";
import { Avatar, Button, Input, Modal, Table, Tag } from "antd";
import { Form } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
function ViewWithdraw() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [reason, setReason] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const onChange = (e) => {
    setReason(e.target.value);
  };

  const getRequestWithdraw = async () => {
    try {
      const response = await api.get("/requestsWithDraw");
      console.log(response.data.data);
      setData(response.data.data);
      console.log(data);
    } catch (e) {
      alertFail(e.response.data);
    }
  };

  useEffect(() => {
    getRequestWithdraw();
  }, []);

  const onFinishApprove = async () => {
    try {
      const response = await api.put(`/acceptWithDraw?TransactionId=${id}`);
      setModal1Open(false);
      alertSuccess("Approve successfully!");
      getRequestWithdraw();
    } catch (error) {
      alertFail(error.response.data);
    }
  };

  const onFinishReject = async () =>{
    try {
      const response = await api.put(`/rejectWithDraw?TransactionId=${id}&reason=${reason}`);
      setModal2Open(false);
      alertSuccess("Reject successfully!");
      getRequestWithdraw();
    } catch (error) {
      alertFail(error.response.data, reason);
    }
  }

 


  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "transactionID",
      key: "transactionID",
    },
    {
      title: "Users",
      dataIndex: "userFrom",
      key: "userForm",
      render: (userFrom) => (
        <a>
          {userFrom ? (
            <Avatar
              style={{ marginRight: "0.5em" }}
              src={userFrom?.avt || ""}
            />
          ) : null}
          {userFrom?.name}
        </a>
      ),
    },
    {
      title: "Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
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
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <p style={{ fontFamily: "MediumCereal" }}>{amount}$</p>
      ),
    },
    {
      title: "Approve",
      key: "action",
      render: (_, record) => {
        return (
          <div style={{ display: "flex ", gap: "10px" }}>
            <Button
              style={{
                backgroundColor: "rgba(92, 177, 84, 0.1)",
                color: "rgba(92, 177, 84, 1)",
                fontFamily: "MediumCereal",
                border: "2px solid rgba(92, 177, 84, 1)",
                height: "3em",
                padding: "0 1.5em",
              }}
              onClick={() => {
                setId(record.transactionID);
                setModal1Open(true);
              }}
            >
              Approve
            </Button>
          </div>
        );
      },
    },
    {
      title: "Reject",
      key: "action",
      render: (_, record) => {
        return (
          <>
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
                setId(record.transactionID);
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

  return (
    <div className="view-withdraw">
      <h1>Request withdraw</h1>
      <Table
        style={{ fontFamily: "MediumCereal" }}
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["3", "7"],
        }}
      />

      <Modal
        title="Confirm approve widthdraw"
        centered
        open={modal1Open}
        footer={null}
        onCancel={() => setModal1Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <h3>Are you sure to approve?</h3>
          <br />
          <label>ID</label>
          <Input value={id} disabled />
          <Button
            style={{ marginTop: "1em" }}
            type="primary"
            htmlType="submit"
            onClick={onFinishApprove}
          >
            Submit
          </Button>
        </Form>
      </Modal>

      <Modal
        title="Confirm to deactivate user"
        centered
        open={modal2Open}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <label>Are you sure to reject?</label>
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
          <Button type="primary" htmlType="submit" onClick={onFinishReject}>
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default ViewWithdraw;
