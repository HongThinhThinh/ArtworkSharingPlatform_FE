import React from "react";
import "./ChatDetail.scss";
import { Button, message } from "antd";
import { LiaFacebookMessenger } from "react-icons/lia";
import { useStateValue } from "../../Context/StateProvider";
import RoomChatDetail from "../roomchatDetail/RoomChatDetail";


function ChatDetail() {
  const { idRoomChat, setShowSearchFriends } = useStateValue();


 
  const sendMessage = () => {
    console.log("send");
  };



  return (
    <>
      {idRoomChat != null ? (
        <RoomChatDetail/>
      ) : (
        <div className="chatDetail">
          <div className="chatDetail__icon">
            <LiaFacebookMessenger fontSize={"4rem"} color={"white"} />
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
