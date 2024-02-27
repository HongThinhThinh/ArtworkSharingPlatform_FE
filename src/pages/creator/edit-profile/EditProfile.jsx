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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <img src={user.avt} alt="" />
              <UploadArtWork content="Upload New Avatar" />
            </div>
          </div>
          <div className="changeUsername">
            <Form className="login__form__container__namepass__group-form">
              <Form.Item
                label="Username"
                name="userName"
                className="login__form__container__namepass__group-form"
                rules={[{}]}
              >
                <Input
                  readOnly
                  defaultValue={user.name}
                  className="login__form__container__namepass__group-form__input"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                className="login__form__container__namepass__group-form"
                rules={[{}]}
              >
                <Input
                  defaultValue={user.email}
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
