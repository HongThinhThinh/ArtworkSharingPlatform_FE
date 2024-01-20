import React from "react";
import cremo from "../../assets/Cremo.png";
import "./Logo.scss";

function Logo() {
  return (
    <div className="wrapper">
      <img src={cremo} className="wrapper__logo" />
    </div>
  );
}

export default Logo;
