import React from "react";
import "./ForgotPassword.scss";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import LogoWhite from "../../component/logoWhite/LogoWhite";

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemContext = React.createContext([]);

// eslint-disable-next-line react/prop-types
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

function ForgotPassword() {
  return (
    <>
      <LogoWhite />
      <Row container className="forgot">
        <Col md={24} lg={7} className="forgot__side-bar">
          <video
            muted
            autoPlay
            loop
            preload="auto"
            className="forgot__side-bar__media"
            src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
          ></video>
        </Col>
        <Col md={24} lg={17} className="forgot__form">
          <Col lg={14} className="forgot__form__container">
            <h3>Forgot Password?</h3>
            <p>
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </p>
            <p>
              For security reasons, we do NOT store your password. So rest
              assured that we will never send your password via email.
            </p>

            <Form
              className="forgot__form__container__email"
              name="form_item_path"
              layout="vertical"
              // onFinish={onFinish}
            >
              <MyFormItemGroup className="forgot__form__container__email__group-form">
                <Form.Item
                  label="Email Address"
                  name="email_address"
                  className="forgot__form__container__email__group-form"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email address!",
                    },
                  ]}
                >
                  <Input className="forgot__form__container__email__group-form__input" />
                </Form.Item>
              </MyFormItemGroup>
              <Button
                className="forgot__form__container__email__submit"
                htmlType="submit"
              >
                Send Reset Instructions
              </Button>
            </Form>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default ForgotPassword;
