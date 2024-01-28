import React from "react";
import { Link } from "react-router-dom";
import "./SignInUp.scss";
import { Avatar } from "antd";

function SignInUp() {
  return (
    <div className="signInUp">
      <Link className="signInUp__login" to="/login">
        Log in
      </Link>

      <Link className="signInUp__signup" to="/register">
        Sign up
      </Link>
    </div>
  );
}

export default SignInUp;
