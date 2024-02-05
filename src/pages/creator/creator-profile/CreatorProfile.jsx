import React from "react";
import ImgPreview from "../../Image/Image";
import "./CreatorProfile.scss";
import Notification from "../../../component/notification/Notification";
import { useNavigate } from "react-router";
import EditProfile from "../edit-profile/EditProfile";
function CreatorProfile() {
  const navigate = useNavigate();
  return (
    <div className="wrap-creatorProfile">
      <div className="header-noti">
        <Notification />
      </div>
      <div className="creator-profilee">
        <div className="creator-profilee__img">
          <ImgPreview src="https://i.pinimg.com/236x/5b/5f/f7/5b5ff7b9fc4be5cc8abf3b4b53033b25.jpg" />
        </div>
        <div className="creator-profilee__info">
          <div className="creator-profilee__info__name">
            <h2>Hong Thinh</h2>
            <div className="creator-profilee__editprofile">
              <EditProfile />
            </div>
          </div>
          <div className="creator-profilee__info__follower">
            <h4>20 Post </h4>
            <span>|</span>
            <h4>200 follower</h4>
            <span>|</span>
            <h4>200 follower</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorProfile;
