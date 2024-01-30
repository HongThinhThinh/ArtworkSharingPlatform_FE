import React from "react";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import TextAreaa from "../../component/textarea/TextArea";
import UploadImg from "../../assets/UploadImg/UploadImg";
import Tags from "../../component/tags/Tag";
import "./FormArtwork.scss";
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

function FormArtwork() {
  const navigate = useNavigate();

  const onFinish = async (value) => {};
  return (
    <div
      style={{
        flexDirection: "column",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Row container className="FormArtWork">
        <div className="FormArtWork--overlay">
          <h3>Upload New ArtWork</h3>
          <Form
            className="login__form__container__namepass"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <MyFormItemGroup className="login__form__container__namepass__group-form">
              <Form.Item
                label="Title"
                name="title"
                className="login__form__container__namepass__group-form"
                rules={[
                  {
                    required: true,
                    message: "Please input your title!",
                  },
                ]}
              >
                <Input className="login__form__container__namepass__group-form__input" />
              </Form.Item>
              <Form.Item
                label="Description"
                name="password"
                className="login__form__container__namepass__group-form"
                rules={[
                  {
                    required: true,
                    message: "Please input your description",
                  },
                ]}
              >
                <TextAreaa />
              </Form.Item>
              <Form.Item
                label="Tags"
                name="title"
                className="login__form__container__namepass__group-form"
                rules={[
                  {
                    required: true,
                    message: "Please input your title!",
                  },
                ]}
              >
                <Input className="login__form__container__namepass__group-form__input" />
                <Tags />
              </Form.Item>
              <Form.Item>
                <UploadImg />
              </Form.Item>
            </MyFormItemGroup>
            <Button
              className="login__form__container__namepass__submit"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Row>
    </div>
  );
}

export default FormArtwork;
