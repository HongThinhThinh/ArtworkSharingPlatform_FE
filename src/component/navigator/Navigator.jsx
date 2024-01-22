import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { navFooterConfig, navHeaderConfig } from "./config";

function Navigator({ status }) {
  const navList = status == "footer" ? navFooterConfig : navHeaderConfig;
  return (
    <div className="navigator">
      {navList.map((nav) => (
        <Link className="navigator__nav" to={nav.path}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
}

export default Navigator;
