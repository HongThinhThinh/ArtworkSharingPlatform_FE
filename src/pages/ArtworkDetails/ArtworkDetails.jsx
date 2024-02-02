import React from "react";
import RoomMessage from "../../component/roomMessage/RoomMessage";
import "./ArtworkDetails.scss";
import ArtworkInfo from "../../component/ArtworkInfo/ArtworkInfo";
import ListFeedback from "../../component/ListFeedback/ListFeedback";
import CreatorWorkart from "../../sections/creatorWorkart/CreatorWorkart";

function ArtworkDetails() {
  // call api lưu vào state
  return (
    <>
      <div className="artworkDetails">
        <div className="artworkDetails--left">
          <div className="artworkDetails--left--content">
            <ArtworkInfo />
          </div>
        </div>
        <div className="artworkDetails--right">
          <ListFeedback />
        </div>
      </div>
      {/* <h1>Maybe you like</h1>
      <CreatorWorkart /> */}
    </>
  );
}

export default ArtworkDetails;
