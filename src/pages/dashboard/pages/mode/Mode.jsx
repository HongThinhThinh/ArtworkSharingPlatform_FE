import { Button } from "antd";
import React, { useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import FormSignupMod from "../../../../component/formSignupMod/FormSignupMod";
import "./Mode.scss";
function Mode() {
  const [status, setStatus] = useState(false);
  return (
    <div className="mode">
      <Button
        style={{ backgroundColor: "white" }}
        onClick={() => setStatus(!status)}
        className="mode__createMod"
      >
        <IoPersonAddOutline /> Create new mod
      </Button>
      <FormSignupMod status={status} setStatus={() => setStatus(!status)} />
    </div>
  );
}

export default Mode;
