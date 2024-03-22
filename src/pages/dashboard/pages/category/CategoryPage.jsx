import { Button, Drawer, Input, Modal, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
// import "./Mode.scss";
import { Form, Link, useNavigate } from "react-router-dom";
import api from "../../../../config/axios";
import TextArea from "antd/es/input/TextArea";
import {
  alertFail,
  alertSuccess,
} from "../../../../assets/hook/useNotification";
import { IoMdAdd } from "react-icons/io";
import FormNewCategory from "../../../../component/formNewCategory/FormNewCategory";

function CategoryPage() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onFinishDeactive = async () => {
    if (name.trim().length == 0) {
      alertFail("Please input a category name!");
    } else {
      try {
        const response = await api.put("/UpdateCategory", {
          id: id,
          name: name,
        });
        setModal2Open(false);
        alertSuccess(response.data.message);
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
      title: "Category ID",
      dataIndex: "id",
      key: "CategoryID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "CategoryName",
    },

    {
      title: "Deactive",
      dataIndex: "deActive",
      key: "deActive",
      hidden: true,
    },

    {
      title: "Update",
      key: "action",
      render: (_, record) => {
        return (
          <div style={{ display: "flex ", gap: "10px" }}>
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
                setName(record.name);
                setModal2Open(true);
              }}
            >
              Update
            </Button>
          </div>
        );
      },
    },
    {
      title: "Delete",
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
                Enable
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
                  setName(record.name);
                  setModal2Open(true);
                }}
              >
                Disable
              </Button>
            )}
          </>
        );
      },
    },
  ].filter((item) => !item.hidden);

  const getAllByRole = async () => {
    try {
      const response = await api.get("/adminCategorys");
      console.log(response.data.data);
      setAllUsers(response.data.data);
    } catch (e) {
      alertFail(e.response.data);
    }
  };

  useEffect(() => {
    getAllByRole();
  }, []);

  console.log();

  return (
    <div className="mode">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          style={{ backgroundColor: "white" }}
          onClick={() => setStatus(true)}
          className="mode__createMod"
        >
          Create New Category <IoMdAdd />
        </Button>
        {/* <div style={{ color: "#3c3c3c" }} className="mode__info">
          <h3>Active Mode: {activeUsersCount}</h3>
          <h3>Deactive Mode: {deactiveUsersCount}</h3>
          <h3>Total Mode: {allUsers.length} </h3>
        </div> */}
      </div>

      <FormNewCategory
        getAllByRole={getAllByRole}
        status={status}
        setStatus={setStatus}
      />

      <Table
        columns={columns}
        dataSource={allUsers}
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: true,
          pageSizeOptions: ["2", "4"],
        }}
      />
      <Modal
        title="Confirm to disable this category"
        centered
        open={modal1Open}
        footer={null}
        onCancel={() => setModal1Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          {/* <h3>Are you sure to diable {name}?</h3> */}
          {/* <br /> */}
          <label>ID</label>
          <Input style={{ margin: "8px 0" }} value={id} disabled />
          <label>Category Name</label>
          <Input style={{ margin: "8px 0" }} value={id} disabled />
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
        title="Update Category Name"
        centered
        open={modal2Open}
        footer={null}
        onCancel={() => setModal2Open(false)}
      >
        <Form name="form_item_path" layout="vertical">
          <label>ID</label>
          <Input value={id} disabled />
          <label>New Category Name</label>
          <Input
            showCount
            maxLength={100}
            onChange={onChange}
            value={name}
            style={{
              marginTop: "1em",
              height: 50,
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

export default CategoryPage;
