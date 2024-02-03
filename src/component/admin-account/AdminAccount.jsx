import { Avatar } from "antd";
import React from "react";
import "./AdminAccount.scss";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

function AdminAccount() {
  return (
    <div className="admin-account">
      <Avatar
        icon={<UserOutlined />}
        className="admin-account__avatar"
      ></Avatar>
      <div className="admin-account__info">
        <h3 className="admin-account__info__name">Moni</h3>
        <p className="admin-account__info__role">Account Mode</p>
      </div>
      <div className="admin-account__pop-down">
        <DownOutlined />
      </div>
    </div>
  );
}

export default AdminAccount;
