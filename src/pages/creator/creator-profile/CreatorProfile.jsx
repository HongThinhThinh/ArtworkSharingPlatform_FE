import React from "react";
import ImgPreview from "../../Image/Image";
import { Button } from "antd";
import "./CreatorProfile.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
function CreatorProfile() {
  return (
    <div className="wrap-creatorProfile">
      <div className="header-noti">
        <IoMdNotificationsOutline />
      </div>
      <div className="creator-profilee">
        <div className="creator-profilee__img">
          <ImgPreview src="https://i.pinimg.com/236x/5b/5f/f7/5b5ff7b9fc4be5cc8abf3b4b53033b25.jpg" />
        </div>
        <div className="creator-profilee__info">
          <div className="creator-profilee__info__name">
            <h2>Hong Thinh</h2>
            <Button
              className="login__form__container__namepass__submit"
              htmlType="submit"
              // style={{backgroundColor: theme?"#1677ff":""}}
            >
              Edit Profile
            </Button>
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
