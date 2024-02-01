import React, { useState } from "react";
import "./ChatList.scss";
import { FaEdit } from "react-icons/fa";
import RoomMessage from "../roomMessage/RoomMessage";
import { useStateValue } from "../../Context/StateProvider";

function ChatList() {
    const {  theme,setShowSearchFriends } = useStateValue();
    const [active,setActive] = useState(0);

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
          <RoomMessage room={1} active={active} setActive={setActive}/>
          <RoomMessage room={2} active={active} setActive={setActive}/>
          <RoomMessage room={3} active={active} setActive={setActive}/>
          <RoomMessage room={4} active={active} setActive={setActive}/>
          <RoomMessage room={5} active={active} setActive={setActive}/>
          <RoomMessage room={6} active={active} setActive={setActive}/>
          <RoomMessage room={7} active={active} setActive={setActive}/>
          <RoomMessage room={8} active={active} setActive={setActive}/>
          <RoomMessage room={9} active={active} setActive={setActive}/>
          <RoomMessage room={10} active={active} setActive={setActive}/>
          <RoomMessage room={11} active={active} setActive={setActive}/>
          <RoomMessage room={12} active={active} setActive={setActive}/>
          <RoomMessage room={13} active={active} setActive={setActive}/>
          <RoomMessage room={14} active={active} setActive={setActive}/>
          <RoomMessage room={15} active={active} setActive={setActive}/>
       
        </div>
      </div>
      
    </>
  );
}

export default ChatList;
