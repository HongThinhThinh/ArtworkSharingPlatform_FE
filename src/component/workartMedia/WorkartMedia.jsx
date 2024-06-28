import React from "react";
import "./WorkartMedia.scss";
import { useNavigate } from "react-router-dom";

function WorkartMedia({ image, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/artworkDetails/${id}`);
      }}
      style={{
        // width: "100%",
        // backgroundSize: "cover",
        cursor: "pointer",
        backgroundImage: `url(${image})`,
      }}
      className="workart-media"
    />
  );
}

export default WorkartMedia;
