import React from "react";
import "./ChatDetail.scss";
import { Button, message } from "antd";
import { LiaFacebookMessenger } from "react-icons/lia";
import { useStateValue } from "../../Context/StateProvider";
import RoomChatDetail from "../roomChatDetail/RoomChatDetail";


function ChatDetail() {
  const { idRoomChat, setShowSearchFriends,theme } = useStateValue();


 
  const sendMessage = () => {
    console.log("send");
  };



  return (
    <>
      {idRoomChat != null ? (
        <RoomChatDetail/>
      ) : (
        <div className="chatDetail">
          <div className="chatDetail__icon" style={{border: theme? "#fff 3px solid":"#000 3px solid"}}>
            <LiaFacebookMessenger fontSize={"4rem"} color={theme?"white":"#000"} />
          </div>
          <h4>Your message</h4>
          <p>Send photos and private messages to friends</p>
          <Button
            type="primary"
            onClick={()=>setShowSearchFriends(true)}
            style={{ marginTop: "15px" }}
          >
            Send Message
          </Button>
        </div>
      )}
    </>
  );
}

export default ChatDetail;
