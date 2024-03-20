import { Button, Drawer, Input, Modal, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import api from "../../../../config/axios";
import TextArea from "antd/es/input/TextArea";
import { FaFilter } from "react-icons/fa";
import {
  alertFail,
  alertSuccess,
} from "../../../../assets/hook/useNotification";
import { GoDotFill } from "react-icons/go";
function Creators() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
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
      title: "Avatar",
      dataIndex: "avt",
      key: "avt",
      render: (avt) => (
        <img
          src={avt}
          alt="Avatar"
          style={{ width: "3em", height: "3em", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Status",
      dataIndex: "deActive",
      key: "deActive",
      filters: [
        { text: "Active", value: true },
        { text: "Deactive", value: false },
      ],
      onFilter: (value, record) => record.active === value,
      render: (deActive) => (
        <div>
          {deActive ? (
            <MdOutlineBlock style={{ color: "red", marginLeft:"0.2em" }} />
          ) : (
            <GoDotFill style={{ color: "green", fontSize: "1.7em" }} />
          )}
        </div>
      ),
    },
    // {
    //   title: "Deactive",
    //   dataIndex: "deActive",
    //   key: "deActive",
    //   hidden: true,
    // },

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
          <Space size="middle">
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
          </Space>
        );
      },
    },
  ].filter((item) => !item.hidden);

  const getAllByRole = async () => {
    try {
      const response = await api.get("/usersRole", {
        params: {
          role: "CREATOR",
        },
      });
      setAllUsers(response.data.data);
      // console.log(response.data.data)
    } catch (e) {
      alertFail("Fail to load");
    }
  };

  useEffect(() => {
    getAllByRole();
  }, [allUsers]);

  console.log();

  return (
    <div className="audience" style={{ padding: "1.5em" }}>
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

export default Creators;
