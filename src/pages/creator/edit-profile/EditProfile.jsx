import React, { useState } from "react";
import { Button, ConfigProvider, Drawer, Form, Input, Space } from "antd";
import { createStyles, useTheme } from "antd-style";
import "./EditProfile.scss";
import UploadArtWork from "../../../component/UploadArtWork/UploadArtWork";
const useStyle = createStyles(({ token }) => ({
  "my-drawer-body": {
    background: token.blue1,
  },
  "my-drawer-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-drawer-header": {
    background: token.green1,
  },
  "my-drawer-footer": {
    color: token.colorPrimary,
  },
  "my-drawer-content": {
    borderLeft: "2px dotted #333",
  },
}));

const EditProfile = () => {
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
    content: {
      boxShadow: "-10px 0 10px #666",
    },
    header: {
      borderBottom: `1px solid ${token.colorPrimary}`,
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
          // style={{backgroundColor: theme?"#1677ff":""}}
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
              <img
                src="https://i.pinimg.com/236x/5b/5f/f7/5b5ff7b9fc4be5cc8abf3b4b53033b25.jpg"
                alt=""
              />
              <UploadArtWork content="Upload New Avatar" />
            </div>
          </div>
          <div className="changeUsername">
            <Form className="login__form__container__namepass__group-form">
              <Form.Item
                label="UserName"
                name="userName"
                className="login__form__container__namepass__group-form"
                rules={[{}]}
              >
                <Input
                  defaultValue="Hong Thinh"
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
                  defaultValue="thinhnhse171708@fpt.edu.vn"
                  className="login__form__container__namepass__group-form__input"
                />
              </Form.Item>
              <Form.Item
                label="Old Password"
                name="OldPassword"
                className="login__form__container__namepass__group-form"
                rules={[{}]}
              >
                <Input
                  defaultValue="thinhnhse171708@fpt.edu.vn"
                  className="login__form__container__namepass__group-form__input"
                />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="NewPassword"
                className="login__form__container__namepass__group-form"
                rules={[{}]}
              >
                <Input
                  defaultValue="thinhnhse171708@fpt.edu.vn"
                  className="login__form__container__namepass__group-form__input"
                />
              </Form.Item>
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
      <ConfigProvider
        drawer={{
          classNames,
          styles: drawerStyles,
        }}
      >
        <Drawer
          title="Edit your profile"
          placement="right"
          onClose={() => toggleDrawer(1, false)}
          open={open[1]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </ConfigProvider>
    </div>
  );
};
export default EditProfile;
