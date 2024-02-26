import React from "react";
import { Steps } from "antd";
import "./CustomeSteps.scss";

const description = "This is a description.";
const CustomeSteps = () => (
  <Steps
    className="custome-steps"
    current={1}
    items={[
      {
        title: "Finished",
        description,
      },
      {
        title: "In Progress",
        description,
        subTitle: "Left 00:00:08",
      },
      {
        title: "Waiting",
        description,
      },
      {
        title: "Done",
        description,
      },
    ]}
  />
);
export default CustomeSteps;
