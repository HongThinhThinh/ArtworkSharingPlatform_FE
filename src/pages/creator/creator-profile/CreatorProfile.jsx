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
          <ImgPreview src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/405464790_1297996437578088_4420355434371338161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=z3RtPzDl3R0AX_DswY0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBBdE3sw4uS12qiTZhDzsfsUhEeupdvbyTCHLcd-scDMQ&oe=65C888F1" />
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
