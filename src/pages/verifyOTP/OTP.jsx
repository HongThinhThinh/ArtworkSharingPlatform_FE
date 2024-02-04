import React, { useState } from "react";
import "./OTP.scss";
import LogoWhite from "../../component/logoWhite/LogoWhite";
import { Button, Col, Collapse, Drawer, Form, Input, Row } from "antd";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";

function OTP() {
  const [otp, setOtp] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <Row container className="verify">
      <LogoWhite />
      <Col md={24} lg={8} className="verify__side-bar">
        <video
          muted
          autoPlay
          loop
          preload="auto"
          className="verify__side-bar__media"
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
        ></video>
      </Col>
      <Col md={24} lg={16} className="verify__form">
        <Col lg={14} className="verify__form__container">
          <h1>Let's verify</h1>
          <h2>your email address</h2>
          <p>
            In order to get the most out of Cremo, please enter the code in the
            email we've sent to:{" "}
          </p>
          <div className="verify__form__container__otp">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={"verify__form__container__otp__input-customize"}
            />
          </div>
          <Button className="verify__form__container__submit">Confirm</Button>
          <div className="verify__form__container__email-note">
            <p>
              Didn't receive the email? Check your Spam folder, it may have been
              caught by filter. If you still dont't see it, you can{" "}
              <Link className="verify__form__container__email-note__error">
                resend the confirmation email.
              </Link>
            </p>

            <h5>
              Wrong email address?{" "}
              <Link
                className="verify__form__container__email-note__error"
                onClick={() => (visible ? setVisible(false) : setVisible(true))}
              >
                Change it.
              </Link>
            </h5>
          </div>

          {visible && (<div> <div className="verify__form__container__changepass">
              <h5>Email Address</h5>
              <Input className="verify__form__container__changepass__input" />
            </div>
            <Button className="verify__form__container__submit">
              Update and Reset Confirmation
            </Button></div>)}
 
        </Col>
      </Col>
    </Row>
  );
}

export default OTP;
