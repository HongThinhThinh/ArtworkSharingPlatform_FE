import React, { useState } from "react";
import "./ChatList.scss";
import { FaEdit } from "react-icons/fa";
import RoomMessage from "../roomMessage/RoomMessage";
import { useStateValue } from "../../Context/StateProvider";

function ChatList() {
    const {  theme,setShowSearchFriends } = useStateValue();
    // const [active,setActive] = useState(false);


  return (
    <>
      <div className="chat-list">
        <div className="chat-list__information">
          <div className="chat-list__information__left">
            <img
              src="https://demoda.vn/wp-content/uploads/2022/01/anh-dai-dien-avt-anime-nen-xanh-la-553x600.jpg"
              alt=""
            />
            <span>Đỗ Minh</span>
          </div>
          <div
            className="chat-list__information__right"
            onClick={() => setShowSearchFriends(true)}
          >
            <FaEdit fontSize={"20px"} color={theme?"#fff":"#000"} />
          </div>
        </div>
        <h3>Message</h3>
        <div class="chat-list__items">
          <RoomMessage room={12}/>
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
          <RoomMessage />
        </div>
      </div>
      
    </>
  );
}

export default ChatList;
