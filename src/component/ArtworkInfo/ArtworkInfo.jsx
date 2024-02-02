import React from "react";
import "./ArtworkInfo.scss";
import { GoHeart } from "react-icons/go";
import { MdOutlineIosShare } from "react-icons/md";
function ArtworkInfo() {
  return (
    <div className="artworkInfo">
      <div className="artworkInfo--contentt">
        <h2>The mushroom</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia</p>
      </div>
      <div className="artworkInfo--img">
        <div className="artworkInfo--img__image">
          <img
            src="https://images.unsplash.com/photo-1706549717451-759b9a588511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="artworkInfo--img__icon">
          <div className="artworkInfo--img__icon__heart">
            <GoHeart />
          </div>
          <div className="artworkInfo--img__icon__share">
            <MdOutlineIosShare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtworkInfo;
