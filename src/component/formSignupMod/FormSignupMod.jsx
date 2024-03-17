import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import "./FormSignupMod.scss";
import { IoAlertCircleOutline } from "react-icons/io5";
import { WarningFilled } from "@ant-design/icons";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import api from "../../config/axios";

function FormSignupMod({ status, setStatus }) {
  const [check, setCheck] = useState(false);

  const [formData, setFormData] = useState(null);

  const onFinish = (e) => {
    setFormData(e);
    setCheck(true);
  };
  console.log(formData);

  const createMod = async () => {
    try {
      const response = await api.post("/signupMod", {
        userName: formData.username,
        name: formData.name,
        password: formData.password,
        email: formData.email,
        phone: formData.phone,
      });
      console.log(response);
      alertSuccess("Successfully create new mod!");
      setCheck(false);
    } catch (e) {
      alertFail(e);
      setCheck(false);
    }
  };

  console.log(check);
  return (
    <Modal
      open={status}
      // onOk={setStatus}
      onCancel={setStatus}
      footer={null}
      title={
        <div>
          <h2
            style={{
              fontFamily: "MediumCereal",
              fontSize: "1.7em",
              textAlign: "center",
            }}
          >
            Create new mod
          </h2>
        </div>
      }
    >
      <Form
        onFinish={onFinish}
        className="form-signup-mod__container"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          className="form-signup-mod__container__label"
          rules={[
            {
              required: true,
              message: (
                <div>
                  <WarningFilled /> Please input username!
                </div>
              ),
            },
          ]}
        >
          <Input className="form-signup-mod__container__input" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          className="form-signup-mod__container__label"
          rules={[
            {
              min: 6,
              message: (
                <div>
                  <WarningFilled /> Password must be at least 6 characters!
                </div>
              ),
            },
            {
              required: true,
              message: (
                <div>
                  <WarningFilled /> Please input your password!
                </div>
              ),
            },
          ]}
        >
          <Input.Password
            className="form-signup-mod__container__input"
            placeholder="6+ characters"
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          className="form-signup-mod__container__label"
          rules={[
            {
              required: true,
              message: (
                <div>
                  <WarningFilled /> Please input your name!
                </div>
              ),
            },
          ]}
        >
          <Input className="form-signup-mod__container__input" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          className="form-signup-mod__container__label"
          rules={[
            {
              type: "email",
              message: (
                <div>
                  <WarningFilled /> Email is not valid!
                </div>
              ),
            },
            {
              required: true,
              message: (
                <div>
                  <WarningFilled /> Please input your email!
                </div>
              ),
            },
          ]}
        >
          <Input className="form-signup-mod__container__input" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          className="form-signup-mod__container__label"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="form-signup-mod__container__input" />
        </Form.Item>

        <Button
          className="form-signup-mod__container__submit"
          htmlType="submit"
        >
          Create Account
        </Button>
        <Modal
          title="Confirm"
          open={check}
          onCancel={() => setCheck(!setCheck)}
          footer={null}
        >
          <h1>Are you sure create</h1>

          <div>
            {" "}
            <Button
              onClick={createMod}
              className="form-signup-mod__container__confirm"
            >
              Confirm
            </Button>
          </div>
        </Modal>
      </Form>
    </Modal>
  );
}

export default FormSignupMod;
