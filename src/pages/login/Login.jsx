import React from "react";
import "./Login.scss";
import ggIcon from "../../assets/google.png";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import "./Login.scss";

const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

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

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

function Login() {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Row container className="login">
      <Col lg={8} className="login__side-bar">
        <video
          autoplay
          className="login__side-bar__media"
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
        ></video>
      </Col>
      <Col lg={14} className="login__form">
        <Col lg={14} className="login__form__container">
          <h3>Sign in to Cremo</h3>
          <Button className="login__form__container__gg-btn">
            <img src={ggIcon} />
            Sign in with Google
          </Button>
          <Divider className="login__form__container__divider" plain>
            or sign in with email
          </Divider>
          <Form
            className="login__form__container__namepass"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <MyFormItemGroup className="login__form__container__namepass__group-form">
              <MyFormItem className="login__form__container__namepass__group-form">
                <label className="login__form__container__namepass__group-form__label">
                  Username or Email
                </label>
                <Input className="login__form__container__namepass__group-form__input" />
              </MyFormItem>
              <MyFormItem className="login__form__container__namepass__group-form">
                <label className="login__form__container__namepass__group-form__label">
                  Password
                </label>
                <Input className="login__form__container__namepass__group-form__input" />
              </MyFormItem>
            </MyFormItemGroup>
            <Button
              className="login__form__container__namepass__submit"
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form>
          <h5 className="login__form__container__linkToSignUp">
            Don't have an account?
            <Link
              to=""
              className="login__form__container__linkToSignUp__signUp"
            >
              Sign up
            </Link>
          </h5>
        </Col>
      </Col>
    </Row>
  );
}

export default Login;
