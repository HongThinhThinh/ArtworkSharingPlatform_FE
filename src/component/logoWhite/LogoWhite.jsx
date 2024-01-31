import React from "react";
import cremo from "../../assets/Cremo-white.svg";
import "./LogoWhite.scss";
import { Link } from "react-router-dom";


function LogoWhite() {
  return (
    <Link to="/" className="wrapper-white">
      <img src={cremo} className="wrapper-white__logo" />
    </Link>
  );
}

export default LogoWhite;
