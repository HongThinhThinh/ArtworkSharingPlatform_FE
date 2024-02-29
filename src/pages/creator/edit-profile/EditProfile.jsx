import React, { useState } from "react";
import {
  Button,
  ConfigProvider,
  Drawer,
  Form,
  Input,
  Modal,
  Space,
} from "antd";
import { createStyles, useTheme } from "antd-style";
import "./EditProfile.scss";
import UploadArtWork from "../../../component/UploadArtWork/UploadArtWork";
import RoundedBtn from "../../../component/rounded-button/RoundedButton";
import { WarningFilled } from "@ant-design/icons";
import useNotification from "antd/es/notification/useNotification";
import { alertFail, alertSuccess } from "../../../assets/hook/useNotification";
import { useDispatch, useSelector } from "react-redux";
import uploadFile from "../../../assets/hook/useUpload";
import api from "../../../config/axios";
import { login, logout } from "../../../redux/features/counterSlice";
import { useNavigate, useNavigation } from "react-router-dom";
const useStyle = createStyles(({ token }) => ({
  "my-drawer-body": {
    background: "white",
  },
  "my-drawer-footer": {
    color: token.colorPrimary,
  },
}));

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

const EditProfile = ({ user }) => {
  const [file, setFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState(user?.avt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleDrawer = (idx, target) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const classNames = {
    body: styles["my-drawer-body"],
    mask: styles["my-drawer-mask"],
    header: styles["my-drawer-header"],
    content: styles["my-drawer-content"],
  };
  const drawerStyles = {
    mask: {
      backdropFilter: "blur(10px)",
    },
    body: {
      fontSize: token.fontSizeLG,
    },
  };

  const getLink = async (file) => {
    const URL = await uploadFile(file);
    console.log(URL);
    console.log(user.avt);
    if (URL === "") setUrl(user.avt);
    setUrl(URL);
  };
  const onFinish = async (e) => {
    if (e.name == user?.name && e.email == user?.email && url?.length == 0) {
      alertFail("You didn't change any information!");
      return;
    }
    try {
      const response = await api.put("/editProfile", {
        name: e.name,
        avt: url,
        email: e.email,
      });
      // setFile(url);
      // setReload(response)
      // console(e.email != user.email);

      console.log(e.email);
      console.log(user.email);

      if (e.email != user.email) {
        console.log(e.email);
        console.log(user.email);
        navigate("/login");
        alertSuccess("Please verify your new email ");
        dispatch(logout());
        return;
      }
      alertSuccess("Edit sucessfully");
      dispatch(login(response.data.data));
    } catch (error) {
      // alertFail("Update fail");
      console.log(e.email != user.email);
      alertFail(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="editProfileCreator">
      <Space>
        <Button
          size="middle"
          className="login__form__container__namepass__submit"
          htmlType="submit"
          onClick={() => toggleDrawer(0, true)}
        >
          Edit Profile
        </Button>{" "}
      </Space>
      <Drawer
        className="PopUpRight"
        title="Edit Your Profile"
        placement="right"
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
        classNames={classNames}
        styles={drawerStyles}
      >
        <div className="ChangeProfileInfo">
          <div className="changeAvt">
            <div className="changeAvt--img">
              <img src={url?.length == 0 ? user?.avt : url} alt="" />
              <div>
                <div onChange={(e) => getLink(e.target.files[0])}>
                  <UploadArtWork content="Upload New Avatar" />
                </div>
              </div>
            </div>
          </div>
          <div className="changeUsername">
            <Form
              className="login__form__container__namepass__group-form"
              onFinish={onFinish}
            >
              <Form.Item
                label="Name"
                name="name"
                initialValue={user?.name}
                className="login__form__container__namepass__group-form"
                rules={[
                  {
                    required: true,
                    message: (
                      <div>
                        <WarningFilled /> Please input your Name!
                      </div>
                    ),
                  },
                ]}
              >
                <Input
                  defaultValue={user?.name}
                  className="login__form__container__namepass__group-form__input"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                initialValue={user?.email}
                className="login__form__container__namepass__group-form"
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
                <Input
                  defaultValue={user?.email}
                  className="login__form__container__namepass__group-form__input"
                />
              </Form.Item>
              <RoundedBtn
                style={{ width: "100%", border: "#b42d805d 3px solid" }}
                color="#FDF9FC"
                onClick={showModal}
              >
                Change Password
              </RoundedBtn>

              <Button
                className="login__form__container__namepass__submit"
                htmlType="submit"
                block
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Drawer>
      <Modal
        title={<h2 style={{ fontFamily: "BoldCereal" }}>Basic Modal</h2>}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          name="form_item_path"
          layout="vertical"
          // onFinish={}
        >
          <MyFormItemGroup>
            <Form.Item
              label={
                <label
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Password</p>
                </label>
              }
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label={
                <label
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Re-password</p>
                </label>
              }
              name="re-password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </MyFormItemGroup>
        </Form>
      </Modal>
    </div>
  );
};
export default EditProfile;
