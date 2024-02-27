import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import "./CustomeSteps.scss";

function CustomeSteps(state) {
  console.log(state.state);
  const description = "This is a description.";
  const [statee, setStatee] = useState(state.state);
  useEffect(() => {
    setStatee(state.state);
  }, [state]);
  let currentStep;
  if (statee == "PENDING") currentStep = 0;
  if (statee == "ACTIVE") currentStep = 1;
  if (statee == "PROCESSING") currentStep = 2;
  if (statee == "DONE") currentStep = 3;
  return (
    <Steps
      className="custome-steps"
      current={currentStep}
      items={[
        {
          title: "Watting for Creator Accept ",
          description,
        },
        {
          title: "Waiting for Audience Accept",
          description,
          // subTitle: "Left 00:00:08",
        },
        {
          title: "In Progressing",
          description,
        },
        {
          title: "Done",
          description,
        },
      ]}
    />
  );
}

export default CustomeSteps;
