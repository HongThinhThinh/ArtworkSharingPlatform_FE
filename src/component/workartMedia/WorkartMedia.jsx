import React from "react";
import "./WorkartMedia.scss";

function WorkartMedia({ image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="workart-media"
    />
  );
}

export default WorkartMedia;
