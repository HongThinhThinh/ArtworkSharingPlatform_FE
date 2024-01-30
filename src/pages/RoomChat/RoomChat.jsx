import React from "react";
import ChatList from "../../component/chatList/ChatList";
import ChatDetail from "../../component/chatDetail/ChatDetail";
import "./RoomChat.scss"
import { useStateValue } from "../../Context/StateProvider";
import FormSearchFriends from "../../component/formSearchFriends/FormSearchFriends";

function RoomChat() {
  const { showSearchFriends } = useStateValue();
  return (
    <div className="roomChat">
      <ChatList />
      <ChatDetail />
      {showSearchFriends && <FormSearchFriends/>}
    </div>
  );
}

export default RoomChat;
