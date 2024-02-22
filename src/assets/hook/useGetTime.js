import React from "react";

function formatDateTime(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

const getCurrentDateTime = () => {
  const currentDateTime = new Date();
  return formatDateTime(currentDateTime);
};
export default getCurrentDateTime;
