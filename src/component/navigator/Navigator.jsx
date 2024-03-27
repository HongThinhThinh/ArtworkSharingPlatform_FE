import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { navFooterConfig, navHeaderConfig } from "./config";
import { useMediaQuery } from "react-responsive";
import { Button, Drawer, Space } from "antd";
import { AlignLeftOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";

function Navigator({ status }) {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const navList = status == "footer" ? navFooterConfig : navHeaderConfig;
  const isFooter = status == "footer";
  return (
    <div id={`${isFooter ? "footer" : "header"}`} className="navigator">
      {isFooter ? (
        navList.map((nav) => (
          <Link className="navigator__nav" to={nav.path} key={nav.title}>
            {nav.title}
          </Link>
        ))
      ) : isMobile ? (
        <nav animate={isOpen ? "open" : "closed"}>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            style={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <AlignLeftOutlined style={{ fontSize: "1.5em" }} />
          </Button>
          <Drawer
            title={
              <Space>
                <Button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  style={{ border: "none" }}
                >
                  <CloseCircleOutlined style={{ fontSize: "1.5em" }} />
                </Button>
              </Space>
            }
            placement="left"
            closable={false}
            open={isOpen}
            key="left"
            className="rs-nav-header"
          >
            {navList.map((nav) => (
              <Link className="navigator__nav" to={nav.path} key={nav.title}>
                {nav.title}
              </Link>
            ))}
          </Drawer>
        </nav>
      ) : (
        navList.map((nav) => (
          <Link
            className="navigator__nav"
            to={
              nav.path === "/room-messages"
                ? user?.role === "CREATOR"
                  ? "/creator-manage/room"
                  : "/room-messages"
                : nav.path
            }
            key={nav.title}
          >
            {nav.title === "Message"
              ? user === null
                ? ""
                : nav.title
              : nav.title === "Go Pro"
              ? user?.role === "CREATOR" || user?.role === "ADMIN"
                ? ""
                : nav.title
              : nav.title}
          </Link>
        ))
      )}
    </div>
  );
}

export default Navigator;
