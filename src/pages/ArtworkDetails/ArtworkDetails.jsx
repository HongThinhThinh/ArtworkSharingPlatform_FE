import React from "react";
import RoomMessage from "../../component/roomMessage/RoomMessage";
import "./ArtworkDetails.scss";
import { FaRegCircle } from "react-icons/fa6";
import ArtworkInfo from "../../component/ArtworkInfo/ArtworkInfo";
import ListFeedback from "../../component/ListFeedback/ListFeedback";
import CreatorWorkart from "../../sections/creatorWorkart/CreatorWorkart";

function ArtworkDetails() {
  // call api lưu vào state
  return (
    <>
      <div className="artworkDetails">
        <div className="artworkDetails--left">
          <RoomMessage
            avt="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405274365_1295058761205189_4884784238252082746_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=SfSAh7w5UUIAX9VNPky&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAEoxvG68QbPMPmLHwG7NtiT4P8toTZmBnknMPgiRMvBg&oe=65C11307"
            name="HongThinh"
            lastMessage="Available for working"
            icon={<FaRegCircle />}
          />
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
