import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import "./CustomeSteps.scss";
import { useStateValue } from "../../Context/StateProvider";

function CustomeSteps(props) {
  const { state, reason } = props; // Destructure props to access state and reason
  console.log(reason);
  console.log(state);
  const [statee, setStatee] = useState(state);
  useEffect(() => {
    setStatee(state);
  }, [state]);

  let currentStep;
  if (statee === "PENDING") currentStep = 0;
  else if (statee === "ACTIVE") currentStep = 1;
  else if (statee === "PROCESSING") currentStep = 2;
  else if (statee === "DONE") currentStep = 3;
  else if (statee === "REJECTCREATOR") currentStep = 0;
  else if (statee === "REJECTAUDIENCE") currentStep = 1;

  let status;
  let reasonRejectCreator = "";
  let reasonRejectAudience = "";
  if (statee === "REJECTCREATOR" || statee === "REJECTAUDIENCE")
    status = "error";
  if (statee == "REJECTCREATOR") {
    reasonRejectCreator = reason;
  }
  if (statee == "REJECTAUDIENCE") {
    reasonRejectAudience = reason;
  }

  const { theme } = useStateValue();
  return (
    <Steps
      className={`custome-steps ${theme ? "active" : ""}`}
      current={currentStep}
      status={status}
      items={[
        {
          style: { color: "blue " },
          title: "Watting for Creator Accept ",
          description: reasonRejectCreator,
        },
        {
          title: "Waiting for Audience Accept",
          description: reasonRejectAudience,
          // subTitle: "Left 00:00:08",
        },
        {
          title: "In Progressing ",
          // description,
          // status: "process",
          // icon: <LoadingOutlined />,
        },
        {
          title: "Done",
          // description,
        },
      ]}
    />
  );
}

export default CustomeSteps;
