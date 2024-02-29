import React, { useState } from "react";
import CreatorProfile from "../creator/creator-profile/CreatorProfile";
import Tab from "../../component/tab/Tab";
import ImgPreview from "../Image/Image";
import EditProfile from "../creator/edit-profile/EditProfile";
import "./AudienceProfile.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
function AudienceProfile() {
  const [selectedLayout, setSelectedLayout] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  

  return (
    <div className="audience-profile">
      <div className="creator-profilee">
        <div className="creator-profilee__img">
          <ImgPreview src={user.avt} />
        </div>
        <div className="creator-profilee__info">
          <div className="creator-profilee__info__name">
            <h2>{user.name}</h2>
            <div className="creator-profilee__editprofile">
              <EditProfile user={user} />
            </div>
          </div>
        </div>
      </div>
      <div className="profileA">
        <div className="profileA--navigate">
          <div
            className={`"profileA--navigate__like ${
              selectedLayout === "LikedShot" ? "active_button " : ""
            }`}
            onClick={() => {
              setSelectedLayout("LikedShot");
              navigate("/profile/likedShots");
            }}
          >
            Liked Shots
          </div>
          <div
            className={`"profileA--navigate__orders ${
              selectedLayout === "orders" ? "active_button " : ""
            }`}
            onClick={() => {
              setSelectedLayout("orders");
              navigate("/profile/orders");
            }}
          >
            Orders
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AudienceProfile;
