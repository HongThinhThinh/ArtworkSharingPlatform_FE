import React, { useState } from "react";
import "./SignUp.scss";
import ggIcon from "../../assets/google.png";
import {
  Button,
  Col,
  Form,
  theme,
  Row,
  Input,
  Checkbox,
  Radio,
} from "antd";
import { Link } from "react-router-dom";
import LogoWhite from "../../component/logoWhite/LogoWhite";


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
  const [role, setRole] = useState("audience");
  const [checked, setChecked] = useState(false);


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
    setChecked(e.target.checked);
    console.log(checked);
    // console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Row container className="signUp">
      <LogoWhite />
      <Col md={24} lg={8} className="signUp__side-bar">
        <video
          muted
          autoPlay
          loop
          preload="auto"
          className="signUp__side-bar__media"
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
        ></video>
      </Col>
      <Col md={24} lg={16} className="signUp__form">
        <Col lg={14} className="signUp__form__container">
          <h3>Sign up to Cremo</h3>
          <Form
            className="signUp__form__container"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <MyFormItemGroup className="signUp__form__container__group-form">
              <MyFormItem className="signUp__form__container__group-form__role">
                <label
                  className="signUp__form__container__group-form__label"
                  style={{ paddingRight: "1em" }}
                >
                  Role
                </label>
                <Radio.Group
                  defaultValue="audience"
                  onChange={(e) => setRole(e.target.value)}
                  className="signUp__form__container__group-form__role__option"
                >
                  <Radio.Button
                    value="audience"
                    className="signUp__form__container__group-form__role__option__detail"
                    style={{
                      borderRadius: "10px 0 0 10px",
                      backgroundColor: role === "audience" ? "black" : "white",
                    }}
                  >
                    Audience
                  </Radio.Button>
                  <Radio.Button
                    value="creator"
                    className="signUp__form__container__group-form__role__option__detail"
                    style={{
                      borderRadius: "0 10px  10px 0",
                      backgroundColor: role === "creator" ? "black" : "white",
                    }}
                  >
                    Creator
                  </Radio.Button>
                </Radio.Group>
              </MyFormItem>
              <MyFormItem className="signUp__form__container__group-form__flex">
                <Row>
                  <Col md={11} lg={11}>
                    <label className="signUp__form__container__group-form__label">
                      Name
                    </label>
                    <Input className="signUp__form__container__group-form__input" />
                  </Col>
                  <Col md={2} lg={1}></Col>
                  <Col md={11} lg={12}>
                    <label className="signUp__form__container__group-form__label">
                      Username
                    </label>
                    <Input className="signUp__form__container__group-form__input" />
                  </Col>
                </Row>
              </MyFormItem>
              <MyFormItem className="signUp__form__container__group-form__base">
                <label className="signUp__form__container__group-form__label">
                  Email
                </label>
                <Input className="signUp__form__container__group-form__input" />
                <label className="signUp__form__container__group-form__label">
                  Password
                </label>
                <Input
                  className="signUp__form__container__group-form__input"
                  placeholder="6+ characters"
                />
                {role === "creator" && (
                  <div>
                    <label className="signUp__form__container__group-form__label">
                      Your Phone
                    </label>
                    <Input className="signUp__form__container__group-form__input" />
                  </div>
                )}
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
            </Checkbox>

            <Button
              className="signUp__form__container__submit"
              htmlType="submit"
              disabled={!checked}
              enable={checked}
            >
              Create Account
            </Button>
          </Form>
          <h5 className="signUp__form__container__linkToSignUp">
            Already have an account?
            <Link
              to="/login"
              className="signUp__form__container__linkToSignUp__signUp"
            >
              Sign In
            </Link>
          </h5>
        </Col>
      </Col>
    </Row>
  );
}

export default SignUp;
