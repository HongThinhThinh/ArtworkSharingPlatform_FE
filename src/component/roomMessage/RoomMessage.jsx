import React, { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./RoomMessage.scss";
// eslint-disable-next-line react/prop-types
function RoomMessage({
  room,
  active,
  setActive,
  avt,
  name,
  lastMessage,
  icon,
}) {
  const { setIdRoomChat, setShowSearchFriends, setShowChatList } =
    useStateValue();

  const setShow = () => {
    setIdRoomChat(room);
    setShowSearchFriends(false);
    setActive(room);
    setShowChatList(false);
  };

  return (
    <div
      className={`item ${active === room ? "active" : ""}`}
      onClick={setShow}
    >
      <img src={avt || "abc"} alt="" />
      <div className="item__detail">
        <h4>{name}</h4>
        <span>
          {icon}
          {lastMessage}
        </span>
      </div>
    </div>
  );
}

export default RoomMessage;
