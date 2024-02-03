import React from "react";
import cremo from "../../assets/Cremo.png";
import whiteCremo from "../../assets/Cremo-white.svg";
import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo({ type }) {
  return (
    <Link to="/" className="wrapper-black">
      <img
        src={type == "white" ? whiteCremo : cremo}
        className="wrapper-black__logo"
      />
    </Link>
  );
}

export default Logo;
