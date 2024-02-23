import React from "react";
import "./ArtworkInfo.scss";
import { GoHeart } from "react-icons/go";
import { MdOutlineIosShare } from "react-icons/md";
import ImgPreview from "../../pages/Image/Image";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function ArtworkInfo({ img }) {
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  console.log(img);
  const navigate = useNavigate();
  return (
    <div className="artworkInfo">
      <div className="artworkInfo--back">
        <IoMdArrowBack onClick={() => navigate("/")} />
      </div>
      <div className="artworkInfo--img">
        {!isMobile ? (
          <div className="artworkInfo--img__image">
            <ImgPreview src={img} />
          </div>
        ) : null}
        {/* <div className="artworkInfo--img__icon">
          <div className="artworkInfo--img__icon__heart">
            <GoHeart />
          </div>
          <div className="artworkInfo--img__icon__share">
            <MdOutlineIosShare />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ArtworkInfo;
