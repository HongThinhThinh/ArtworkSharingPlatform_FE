import React from "react";
import "./CreatorSocial.scss";

function CreatorSocial({ followers, following, likes }) {
  return (
    <div className="creator-social">
      <span>{followers} followers</span>
      <span>{following} following</span>
      <span>{likes} likes</span>
    </div>
  );
}

export default CreatorSocial;
