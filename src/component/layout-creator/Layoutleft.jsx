import React from "react";
import image1 from "../../assets/Cremo-white.png";
import { AiOutlinePicture } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import "./layoutLeft.scss";
import { useNavigate } from "react-router-dom";
function LayoutLeft() {
  const navigate = useNavigate();
  return (
    <div className="layoutLeft">
      <img className="layoutLeft--img" src={image1} alt="" />
      <div className="layoutLeft--menu">
        <div
          className="layoutLeft--menu__icon"
          onClick={() => navigate("/creator-manage/artworks")}
        >
          <AiOutlinePicture />
        </div>
        <div
          className="layoutLeft--menu__messenger"
          onClick={() => navigate("/creator-manage/room")}
        >
          <FaFacebookMessenger />
        </div>
        <div
          className="layoutLeft--menu__avt"
          onClick={() => navigate("/creator-manage/profile")}
        >
          <img
            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/405464790_1297996437578088_4420355434371338161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=ZnPretXXkycAX_GtflG&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDFPJVPqX37mYfRkEj9-V1pqIM7UWuwjC-_vNAems4Bhw&oe=65BCAB71"
            alt=""
          />
        </div>
      </div>
      <div
        className="layoutLeft--menu__setting"
        onClick={() => navigate("/creator-manage/settings")}
      >
        <AiOutlineSetting />
      </div>
    </div>
  );
}

export default LayoutLeft;
