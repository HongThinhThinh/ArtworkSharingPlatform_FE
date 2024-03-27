import React from "react";
import "./ArtworkInfo.scss";
import { GoHeart } from "react-icons/go";
import { MdOutlineIosShare } from "react-icons/md";
import ImgPreview from "../../pages/Image/Image";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WatermarkArtwork from "../waterMask/WatermarkArtwork";
function ArtworkInfo({ img, id, price }) {
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  console.log(img);
  console.log("haha", price);
  const navigate = useNavigate();
  return (
    <div className="artworkInfo">
      <div className="artworkInfo--back">
        <IoMdArrowBack onClick={() => navigate("/")} />
      </div>
      <div className="artworkInfo--img">
        {!isMobile ? (
          <div className="artworkInfo--img__image">
            {price == 0 ? (
              <ImgPreview src={img} />
            ) : (
              <WatermarkArtwork url={img} id={id} width={965} height={700} />
            )}
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
