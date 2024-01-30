import React from "react";
import { Link } from "react-router-dom";
import "./SignInUp.scss";
import { Avatar } from "antd";
import { useMediaQuery } from "react-responsive";

function SignInUp() {
  const isMobile = useMediaQuery({ maxWidth: 562 });
  return (
    <div className="signInUp">
      <Link className="signInUp__login" to="/login">
        Log in
      </Link>
      {isMobile ? null : (
        <Link className="signInUp__signup" to="/register">
          Sign up
        </Link>
      )}
    </div>
  );
}

export default SignInUp;
