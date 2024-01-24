import React, { useState } from "react";
import "./SignUp.scss";
import ggIcon from "../../assets/google.png";
import {
  Button,
  Col,
  Divider,
  Form,
  Drawer,
  theme,
  Row,
  Space,
  Input,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";

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

function SignUp() {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const containerStyle = {
    position: "relative",
    height: 200,
    padding: 48,
    overflow: "hidden",
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const onFinish = (value) => {
    console.log(value);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Row container className="signUp">
      <Col lg={8} className="signUp__side-bar">
        <video
          autoplay
          className="signUp__side-bar__media"
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
        ></video>
      </Col>
      <Col lg={16} className="signUp__form">
        <Col lg={14} className="signUp__form__container">
          <h3>Sign up to Cremo</h3>
          <Button className="signUp__form__container__gg-btn">
            <img src={ggIcon} />
            Sign up with Google
          </Button>
          <Divider plain>or</Divider>
          <Form
            className="signUp__form__container__namepass"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <Button
              className="signUp__form__container__namepass__submit"
              htmlType="submit"
              onClick={showDrawer}
            >
              Continue with Email
            </Button>
          </Form>
          <h4 className="signUp__form__container__about">
            By creating an account you agree with our{" "}
            <Link to="" className="signUp__form__container__about__detail">
              Terms of Service
            </Link>
            ,{" "}
            <Link to="" className="signUp__form__container__about__detail">
              Privacy Policy
            </Link>
            , and our default{" "}
            <Link to="" className="signUp__form__container__about__detail">
              Notification Settings
            </Link>
            .
          </h4>
          <h5 className="signUp__form__container__linkToSignUp">
            Don't have an account?{" "}
            <Link
              to="/login"
              className="signUp__form__container__linkToSignUp__signUp"
            >
              Sign In
            </Link>
          </h5>
        </Col>

        <Drawer
          title={
            <Space>
              <Button onClick={onClose}>Back</Button>
            </Space>
          }
          placement="top"
          closable={false}
          onClose={onClose}
          open={open}
          getContainer={false}
          style={{ height: "100vh" }}
        >
          <Form
            className="sign-up-form__form__container"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <MyFormItemGroup className="sign-up-form__group-form">
              <MyFormItem className="sign-up-form__group-form__flex">
                <Row>
                  <Col lg={11}>
                    <label className="sign-up-form__group-form__flex__label">
                      Name
                    </label>
                    <Input className="sign-up-form__group-form__flex__input" />
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={12}>
                    <label className="sign-up-form__group-form__flex__label">
                      Username
                    </label>
                    <Input className="sign-up-form__group-form__flex__input" />
                  </Col>
                </Row>
              </MyFormItem>
              <MyFormItem className="sign-up-form__group-form__base">
                <label className="sign-up-form__group-form__base__label">
                  Email
                </label>
                <Input className="sign-up-form__group-form__base__input" />
                <label className="sign-up-form__group-form__base__label">
                  Password
                </label>
                <Input
                  className="sign-up-form__group-form__base__input"
                  placeholder="6+ characters"
                />
              </MyFormItem>
            </MyFormItemGroup>
            <Checkbox onChange={onChange}>
              I agree with Cremo{" "}
              <Link to="" className="about__detail">
                Terms of Service
              </Link>
              ,{" "}
              <Link to="" className="about__detail">
                Privacy Policy
              </Link>
              , and our default{" "}
              <Link to="" className="about__detail">
                Notification Settings
              </Link>
              .
            </Checkbox>
            <Button
              className="sign-up-form__container__namepass__submit"
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form>
          <h5 className="signUp__form__container__linkToSignUp">
            Don't have an account?
            <Link
              to="/login"
              className="signUp__form__container__linkToSignUp__signUp"
            >
              Sign In
            </Link>
          </h5>
        </Drawer>
      </Col>
    </Row>
  );
}

export default SignUp;
