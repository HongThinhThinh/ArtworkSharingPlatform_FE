import React from "react";
import { Link } from "react-router-dom";
import "./SignInUp.scss";
import { Avatar } from "antd";

function Account() {
  return (
    <div className="signInUp">
      {/* <Link className="signInUp__login" to="/login">
        Log in
      </Link> */}
      <Avatar
        style={{ height: "3em", width: "3em", transform: "translateX(-2em)" }}
        src="https://cdn.dribbble.com/users/4949363/avatars/normal/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
      />
      <Link
        className="signInUp__signup"
        to="/"
        onClick={() => {
          localStorage.removeItem("role");
        }}
      >
        Logout
      </Link>
    </div>
  );
}

export default Account;
