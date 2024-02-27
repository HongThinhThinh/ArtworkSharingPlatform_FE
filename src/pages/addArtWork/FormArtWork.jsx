import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row } from "antd";

const { TextArea } = Input;
import Tags from "../../component/tags/Tag";
import "./FormArtwork.scss";
import ImgPreview from "../Image/Image";
import uploadFile from "../../assets/hook/useUpload";
import image1 from "../../assets/CremoBackground.png";
import UploadArtWork from "../../component/UploadArtWork/UploadArtWork";
import { useStateValue } from "../../Context/StateProvider";
import { getCurrentDateTime } from "../../assets/hook/useGetTime";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import Loading from "../../component/loading/Loading";

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemContext = React.createContext([]);

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
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useStateValue();
  const [URL, setURL] = useState(image1);
  const [imageUploaded, setImageUploaded] = useState(false); // State to track if image is uploaded
  const getLink = async (file) => {
    let URL = `https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif`;
    setURL(URL);
    URL = await uploadFile(file);
    setURL(URL);
    setImageUploaded(true); // Set imageUploaded to true after uploading the image
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const onFinish = async (value) => {
    setIsLoading(true);
    try {
      const response = await api.post("/postArtwork", {
        title: value.title,
        image: URL,
        description: value.description,
        price: 0,
        createDate: getCurrentDateTime(),
        categoriesName: selectedTags,
      });
      console.log(response.data);
      alertSuccess(response.data.message);
    } catch (e) {
      alertFail(e.message);
    }
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Row
          container
          className="FormArtWork"
          style={{ backgroundColor: theme ? "#202020" : "#fff" }}
        >
          <div className="FormArtWork--overlay">
            <Form
              className="login__form__container__namepass"
              name="form_item_path"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3 style={{ color: theme ? "#fff" : "#202020" }}>
                Upload New ArtWork
              </h3>
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
                  name="description"
                  className="login__form__container__namepass__group-form"
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  label="Tags"
                  name="title"
                  className="login__form__container__namepass__group-form"
                >
                  <Tags
                    setSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                  />
                </Form.Item>
              </MyFormItemGroup>
              <Button
                className="login__form__container__namepass__submit"
                style={!imageUploaded && { color: "white" }}
                htmlType="submit"
                disabled={!imageUploaded} // Disable the button if image is not uploaded
              >
                {!imageUploaded ? "Please Upload Image To Submit" : "Submit"}
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
              <UploadArtWork content="Upload new Artwork" />
            </div>
          </div>
        </Row>
      )}
    </div>
  );
}

export default FormArtwork;
