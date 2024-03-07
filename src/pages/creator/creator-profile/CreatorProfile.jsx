import React from "react";
import ImgPreview from "../../Image/Image";
import "./CreatorProfile.scss";
import Notification from "../../../component/notification/Notification";
import { useNavigate } from "react-router";
import EditProfile from "../edit-profile/EditProfile";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/counterSlice";
function CreatorProfile() {
  const user = useSelector(selectUser);
  // console.log(user);
  return (
    <div className="wrap-creatorProfile ">
      <div className="header-noti">
        <Notification />
      </div>
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
