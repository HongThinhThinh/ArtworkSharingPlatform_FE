import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { navFooterConfig, navHeaderConfig } from "./config";
import { useMediaQuery } from "react-responsive";
import { BarsOutlined } from "@ant-design/icons";

function Navigator({ status }) {
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
        <BarsOutlined />
      ) : (
        navList.map((nav) => (
          <Link className="navigator__nav" to={nav.path} key={nav.title}>
            {nav.title}
          </Link>
        ))
      )}
    </div>
  );
}

export default Navigator;
