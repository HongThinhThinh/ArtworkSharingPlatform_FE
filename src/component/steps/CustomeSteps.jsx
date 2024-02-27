import React from "react";
import { Steps } from "antd";
import "./CustomeSteps.scss";

function CustomeSteps(state) {
  console.log(state);
  const description = "This is a description.";
  let currentStep;
  if (state == "PENDING") currentStep = 0;
  if (state == "ACTIVE") currentStep = 1;
  if (state == "PROCESSING") currentStep = 3;
  if (state == "DONE") currentStep = 4;
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
