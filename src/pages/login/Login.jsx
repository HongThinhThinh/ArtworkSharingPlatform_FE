import React from "react";
import "./Login.scss";
import ggIcon from "../../assets/google.png";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import api from "../../config/axios";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
const provider = new GoogleAuthProvider();
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

// eslint-disable-next-line react/prop-types
// const MyFormItem = ({ name, children, ...props }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatName =
//     name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
//   console.log(children);
//   return (
//     <Form.Item name={name} {...props}>
//       {children}
//     </Form.Item>
//   );
// };

function Login() {
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.user.accessToken;
      console.log(token);
      api.post("/login-gg", { token }).then((data) => {
        if (data) {
          localStorage.setItem("role", data);
          navigate("/creator");
        }
      });
    });
  };
  const onFinish = async (value) => {
    const response = await api.post("/login", value);
    const role = response.data.data.role;
    localStorage.setItem("role", role);
    if (role === "ADMIN") {
      navigate("/test");
    }
    if (role === "CREATOR") {
      navigate("/creator");
    }
  };
  return (
    <Row container className="login">
      <Col md={24}lg={10} className="login__side-bar">
        <video
          muted
          autoPlay
          loop
          preload="auto"
          className="login__side-bar__media"
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
        ></video>
      </Col>
      <Col md={24} lg={14} className="login__form">
        <Col lg={14} className="login__form__container">
          <h3>Sign in to Cremo</h3>
          <Button
            onClick={handleLoginGoogle}
            className="login__form__container__gg-btn"
          >
            <img src={ggIcon} />
            Sign in with Google
          </Button>
          <Divider className="login__form__container__divider" plain >
            or sign in with email
          </Divider>
          <Form
            className="login__form__container__namepass"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <MyFormItemGroup className="login__form__container__namepass__group-form">
              {/* <MyFormItem
                name="username"
                className="login__form__container__namepass__group-form"
              >
                <label className="login__form__container__namepass__group-form__label">
                  Username or Email
                </label>
                <Input className="login__form__container__namepass__group-form__input" />
              </MyFormItem> */}
              <Form.Item
                label="Username"
                name="username"
                className="login__form__container__namepass__group-form"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]} 
              >
                <Input className="login__form__container__namepass__group-form__input" />
              </Form.Item>
              {/* <MyFormItem className="login__form__container__namepass__group-form">
                <label className="login__form__container__namepass__group-form__label">
                  Password
                </label>
                <Input className="login__form__container__namepass__group-form__input" />
              </MyFormItem> */}
              <Form.Item
                label="Password"
                name="password"
                className="login__form__container__namepass__group-form"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password className="login__form__container__namepass__group-form__input" />
              </Form.Item>
            </MyFormItemGroup>
            <Button
              className="login__form__container__namepass__submit"
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form>
          <h5 className="login__form__container__linkToSignUp">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
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
