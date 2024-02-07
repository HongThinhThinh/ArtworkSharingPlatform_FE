import React, { useState } from "react";
import CreatorProfile from "../creator/creator-profile/CreatorProfile";
import Tab from "../../component/tab/Tab";
import ImgPreview from "../Image/Image";
import EditProfile from "../creator/edit-profile/EditProfile";
import "./AudienceProfile.scss";
import { Outlet, useNavigate } from "react-router-dom";
function AudienceProfile() {
  const [selectedLayout, setSelectedLayout] = useState("");
  const navigate = useNavigate();
  return (
    <div className="audience-profile">
      <div className="creator-profilee">
        <div className="creator-profilee__img">
          <ImgPreview src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/405464790_1297996437578088_4420355434371338161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=z3RtPzDl3R0AX_DswY0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBBdE3sw4uS12qiTZhDzsfsUhEeupdvbyTCHLcd-scDMQ&oe=65C888F1" />
        </div>
        <div className="creator-profilee__info">
          <div className="creator-profilee__info__name">
            <h2>Hong Thinh</h2>
            <div className="creator-profilee__editprofile">
              <EditProfile />
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
