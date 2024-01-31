import React from "react";
import cremo from "../../assets/Cremo-white.svg";
import "./Logo.scss";
import { Link } from "react-router-dom";


function LogoWhite() {
  return (
    <Link to="/" className="wrapper">
      <img src={cremo} className="wrapper__logo" />
    </Link>
  );
}

export default LogoWhite;
