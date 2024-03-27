import React from "react";
import "./UserInfo.scss";
import ImgPreview from "../../pages/Image/Image";
import EditProfile from "../../pages/creator/edit-profile/EditProfile";

function UserInfo({ user }) {
  return (
    <div className="creator-profilee">
      <div className="creator-profilee__img">
        <ImgPreview src={user?.avt} style={{ height: "200px" }} />
      </div>
      <div className="creator-profilee__info">
        <div className="creator-profilee__info__name">
          <h2>{user?.name}</h2>
          <div className="creator-profilee__editprofile">
            <EditProfile user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
