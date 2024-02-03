import React, { useState } from "react";
import "./Notification.scss";
import { Button, Popover } from "antd";
import { BellOutlined } from "@ant-design/icons";

function NotificationItem() {
  return (
    <div className="noti-item">
      <h3>This is a notification</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est
        ipsum. Aliquam a ante dui.
      </p>
    </div>
  );
}

function Notification() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };
  return (
    <Popover
      className="pop-noti"
      placement="bottomLeft"
      title={<h3 className="pop-title">Notifications</h3>}
      content={
        <>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </>
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button className="pop-noti__noti-btn">
        <BellOutlined />
      </Button>
    </Popover>
  );
}

export default Notification;
