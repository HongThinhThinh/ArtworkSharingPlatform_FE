import { Button, Result } from "antd";
import React from "react";
import RoundedBtn from "../../component/rounded-button/RoundedButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../component/logo/Logo";

function ConfirmSuccess() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Logo />
      <Result
        style={{ fontFamily: "BoldCereal", marginTop: "5em" }}
        status="success"
        title="Email Confirmation Successfully!"
        subTitle="Thank you for taking the time to confirm your email. You can now log in to your account. Have a great day!"
        extra={[
          <RoundedBtn color="#1f1f1f" onClick={toLogin}>
            Navigate to Login
          </RoundedBtn>,
        ]}
      />
    </div>
  );
}

export default ConfirmSuccess;
