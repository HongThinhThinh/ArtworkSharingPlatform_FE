import { Button, Result } from "antd";
import React, { useEffect } from "react";
import RoundedBtn from "../../component/rounded-button/RoundedButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../config/axios";
import Logo from "../../component/logo/Logo";

function ConfirmSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const email = params.get("email");

  useEffect(() => {
    const getVerify = async () => {
      try {
        await api.put(`/verify-account`, {
          id: id,
          email: email
        });
      } catch (e) {
        console.log(e);
      }
    };
    getVerify();
  }, []);

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
          // eslint-disable-next-line react/jsx-key
          <RoundedBtn color="#1f1f1f" onClick={toLogin}>
            Go to login
          </RoundedBtn>,
        ]}
      />
    </div>
  );
}
export default ConfirmSuccess;
