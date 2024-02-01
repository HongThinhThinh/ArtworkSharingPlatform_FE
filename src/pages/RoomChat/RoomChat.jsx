import React, { useState } from "react";
import ChatList from "../../component/chatList/ChatList";
import ChatDetail from "../../component/chatDetail/ChatDetail";
import "./RoomChat.scss"
import { useStateValue } from "../../Context/StateProvider";
import FormSearchFriends from "../../component/formSearchFriends/FormSearchFriends";

function RoomChat() {
  const { theme,showSearchFriends } = useStateValue();
  // const [showChatList,setShowChatList] = useState();
  // const isQuery = useMediaQuery()


  console.log(theme);
  console.log(theme?"#202020":"#fff");

  return (
    <div className="roomChat" style={{backgroundColor: theme?"#202020":"#fff",color: theme?"#fff":"#202020"}}>
      <ChatList />
      <ChatDetail />
      {showSearchFriends && <FormSearchFriends/>}
    </div>
  );
}

export default RoomChat;
