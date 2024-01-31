import React, { useState } from "react";
import { Button, Form, Input, Row } from "antd";

import TextAreaa from "../../component/textarea/TextArea";
import Tags from "../../component/tags/Tag";
import "./FormArtwork.scss";
import ImgPreview from "../Image/Image";
import uploadFile from "../../assets/hook/useUpload";
import image1 from "../../assets/CremoBackground.png";
import UploadArtWork from "../../component/UploadArtWork/UploadArtWork";

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
  const [URL, setURL] = useState(image1);
  const getLink = async (file) => {
    let URL = `https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif`;
    setURL(URL);
    URL = await uploadFile(file);
    setURL(URL);
  };
  const onFinish = async (value) => {};
  return (
    <div>
      <Row container className="FormArtWork">
        <div className="FormArtWork--overlay">
          <Form
            className="login__form__container__namepass"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
          >
            <h3>Upload New ArtWork</h3>
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
                <Tags />
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
        <div className="FormArtWork--image">
          <ImgPreview src={URL} />
          <div
            onChange={(e) => {
              getLink(e.target.files[0]);
            }}
          >
            <UploadArtWork />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default FormArtwork;
