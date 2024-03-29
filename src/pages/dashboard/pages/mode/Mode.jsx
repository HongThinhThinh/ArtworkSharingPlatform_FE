import { Button, Drawer, Input, Modal, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import "./Mode.scss";
import { Form, Link, useNavigate } from "react-router-dom";
import api from "../../../../config/axios";
import TextArea from "antd/es/input/TextArea";
import FormSignupMod from "../../../../component/formSignupMod/FormSignupMod";
import {
  alertFail,
  alertSuccess,
} from "../../../../assets/hook/useNotification";

function Mode() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [reason, setReason] = useState("");
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [deactiveUsersCount, setDeactiveUsersCount] = useState(0);
  const onChange = (e) => {
    setReason(e.target.value);
  };

  const onFinishDeactive = async () => {
    if (reason.trim().length == 0) {
      alertFail("Please input a reason!");
    } else {
      try {
        const response = await api.put("/deactiveUser", {
          id: id,
          reasonDeActive: reason,
        });
        setModal2Open(false);
        alertSuccess("Deactive " + name + " successfully!");
        getAllByRole();
      } catch (error) {
        alertFail(error.response.data);
      }
    }
  };
  const onFinishActive = async () => {
    try {
      const response = await api.put(`/activeUser?id=${id}`);
      setModal1Open(false);
      alertSuccess("Active " + name + " successfully!");
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
      render: (text) => <a>{text}</a>,
      hidden: true,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Deactive",
      dataIndex: "deActive",
      key: "deActive",
      hidden: true,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            {record.deActive ? (
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
                  setId(record.id);
                  setName(record.username);
                  setModal1Open(true);
                }}
              >
                Active
              </Button>
            ) : (
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
                Deactive
              </Button>
            )}
          </>
        );
      },
    },
  ].filter((item) => !item.hidden);

  const getAllByRole = async () => {
    try {
      const response = await api.get("/usersRole", {
        params: {
          role: "MOD",
        },
      });
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

      setActiveUsersCount(activeCount);
      setDeactiveUsersCount(deactiveCount);
    } catch (e) {
      alertFail("Fail to load");
    }
  };

  useEffect(() => {
    getAllByRole();
  }, [allUsers]);

  console.log();

  return (
    <div className="mode">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          style={{ backgroundColor: "white" }}
          onClick={() => setStatus(!status)}
          className="mode__createMod"
        >
          Create new moderator account <IoPersonAddOutline />
        </Button>
        <div style={{ color: "#3c3c3c" }} className="mode__info">
          <h3>Active Mode: {activeUsersCount}</h3>
          <h3>Deactive Mode: {deactiveUsersCount}</h3>
          <h3>Total Mode: {allUsers.length} </h3>
        </div>
      </div>

      <FormSignupMod status={status} setStatus={() => setStatus(!status)} />

      <Table
        columns={columns}
        dataSource={allUsers}
        pagination={{
          defaultPageSize: 4,
          showSizeChanger: true,
          pageSizeOptions: ["2", "4"],
        }}
      />
      <Modal
        title="Confirm to activate user"
        centered
        open={modal1Open}
        footer={null}
        onCancel={() => setModal1Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <h3>Are you sure to enable {name}?</h3>
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
        title="Confirm to deactivate user"
        centered
        open={modal2Open}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <label>Are you sure to disable {name}?</label>
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

export default Mode;
