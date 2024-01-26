import React from "react";
import cremo from "../../assets/Cremo.png";
import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="wrapper">
      <img src={cremo} className="wrapper__logo" />
    </Link>
  );
}

export default Logo;
