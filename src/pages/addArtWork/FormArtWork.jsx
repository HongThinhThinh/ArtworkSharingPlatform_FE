import React, { useState, useEffect, useRef } from "react";
import { Button, Divider, Form, Input, Row, Space, Switch, Tour } from "antd";

const { TextArea } = Input;
import Tags from "../../component/tags/Tag";
import "./FormArtWork.scss";
import ImgPreview from "../Image/Image";
import uploadFile from "../../assets/hook/useUpload";
import image1 from "../../assets/CremoBackground.png";
import UploadArtWork from "../../component/UploadArtWork/UploadArtWork";
import { useStateValue } from "../../Context/StateProvider";
import { getCurrentDateTime } from "../../assets/hook/useGetTime";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import Loading from "../../component/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../redux/features/counterSlice";
import { useNavigate } from "react-router-dom";
import { EllipsisOutlined } from "@ant-design/icons";

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
  const [isSell, setIsSell] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(false);
  const { theme } = useStateValue();
  const [URL, setURL] = useState(image1);
  const [imageUploaded, setImageUploaded] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const ref1 = useRef(null);
  const steps = [
    {
      title: "You don't have enough posts left",
      description: "Click here to buy post",
      target: () => ref1.current,
    },
  ];
  const [open, setOpen] = useState(false);
  console.log(user);
  const getLink = async (file) => {
    let URL = `https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif`;
    setURL(URL);
    URL = await uploadFile(file);
    setURL(URL);
    setImageUploaded(true);
  };

  const onChange = (checked) => {
    setIsSell(checked);
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const onFinish = async (value) => {
    setIsLoading(true);

    if (isSell) {
      if (price == 0) {
        alertFail("Price is greater than zero");
        setIsLoading(false);
        return;
      }
      console.log(isSell);
      if (user?.postQuantity == 0) {
        setIsLoading(false);
        setOpen(true);
        return;
      }
    }
    try {
      const response = await api.post("/postArtwork", {
        title: value.title,
        image: URL,
        description: value.description,
        price: isSell ? price : 0,
        createDate: getCurrentDateTime(),
        categoriesName: selectedTags,
      });
      console.log(response.data.data);
      dispath(login(response.data.data.user));
      alertSuccess(response.data.message);
    } catch (e) {
      // alertFail(e.message);
      console.log(e);
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
                    {
                      validator: (_, value) => {
                        if (!value || /^\s/.test(value)) {
                          return Promise.reject('Name must not start with whitespace');
                        }
                        return Promise.resolve();
                      },
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
                  <TextArea
                    rows={4}
                    maxLength={250}
                    placeholder="maxLength is 250 character"
                  />
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
                <Form.Item>
                  <Switch onChange={onChange} />
                  <h5>I want to sell this artwork</h5>
                </Form.Item>
                {isSell && (
                  <Form.Item
                    label="Price $"
                    name="price"
                    className="login__form__container__namepass__group-form"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please input your expect price for this artwork!",
                      },
                      { validator: (_, value) => {
                        if (parseFloat(value) <= 0) {
                          return Promise.reject('Price must be greater than 0');
                        }
                        return Promise.resolve();
                      }
                    },
                    ]}
                  >
                    <Input
                      onInput={(e) => setPrice(e.target.value)}
                      type="number"
                      className="login__form__container__namepass__group-form__input"
                    />
                  </Form.Item>
                )}
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
            <div style={{ display: "flex", gap: "20px" }}>
              <div className="FormArtWork--image__remain-posts">
                Post times remain: <span>{user?.postQuantity}</span>
              </div>
              <Button
                style={{ marginTop: "6px" }}
                onClick={() => navigate("/buyPosts")}
                ref={ref1}
              >
                Buy Post
              </Button>
            </div>
            <ImgPreview src={URL} />
            <div
              onChange={(e) => {
                getLink(e.target.files[0]);
              }}
            >
              <UploadArtWork content="Upload new Artwork" />
            </div>
          </div>
          <Divider />
          <Tour steps={steps} open={open} onClose={() => setOpen(false)} />
        </Row>
      )}
    </div>
  );
}

export default FormArtwork;
