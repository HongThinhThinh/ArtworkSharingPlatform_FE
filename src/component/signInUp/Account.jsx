import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignInUp.scss";
import { Avatar, Button, Divider, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/counterSlice";
import { DownCircleTwoTone } from "@ant-design/icons";

function Account() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = (
    <div className="account-popup">
      <Link
        to={
          user?.role == "CREATOR" ? "/creator-manage/orders" : "/profile/orders"
        }
      >
        Your Orders
      </Link>
      <Link
        to={
          user?.role == "CREATOR" ? "/creator-manage/wallet" : "/profile/wallet"
        }
      >
        Your wallet
      </Link>
      <Link to={"/report-history"}>Report Post</Link>
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </Link>
    </div>
  );

  const contentADMIN = (
    <div className="account-popup">
      <Link to="/dashboard">Dashboard</Link>
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </Link>
    </div>
  );
  return (
    <div className="signInUp">
      <div className="signInUp__active">
        <Popover
          placement="bottomRight"
          title={
            <div
              className="current-account"
              onClick={() =>
                user?.role == "CREATOR"
                  ? navigate("/creator-manage/artworks")
                  : navigate("/profile")
              }
            >
              <Avatar
                style={{
                  height: "3.3em",
                  width: "3.5em",
                  cursor: "pointer",
                }}
                src={user?.avt}
              />
              <h3>{user?.name}</h3>
            </div>
          }
          content={user?.role === "ADMIN" ? contentADMIN : content}
        >
          <div
            className="signInUp__active__current-account"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Avatar
              style={{
                height: "3.8em",
                width: "3.8em",
                cursor: "pointer",
              }}
              src={user.avt}
            />
            <DownCircleTwoTone
              twoToneColor="#8c2db4"
              className="signInUp__active__current-account__dropdown"
            />
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Account;
