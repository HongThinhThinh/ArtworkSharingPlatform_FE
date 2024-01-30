import React, { useEffect, useRef } from "react";
import Message from "../message/Message";
import { IoSend } from "react-icons/io5";
import { Input } from "antd";
const { TextArea } = Input;

function RoomChatDetail() {
  const messagesContainerRef = useRef();
  useEffect(() => {
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }, []);
  return (
    <div className="chat-detail">
      <div className="chat-detail__header">
        <img
          src="https://demoda.vn/wp-content/uploads/2022/01/anh-dai-dien-avt-anime-nen-xanh-la-553x600.jpg"
          alt=""
        />
        <div className="header__info">
          <span>Đỗ Văn Minh</span>
          <div className="status">
            <div className="dot"></div>
            <span>online</span>
          </div>
        </div>
      </div>
      <div className="chat-detail__messages" ref={messagesContainerRef}>
        <Message />
        <Message me="me" />
        <Message />
        <Message me="me" />
        <Message />
        <Message me="me" />
        <Message />
        <Message me="me" />
        <Message />
        <Message me="me" />
        <Message />
        <Message me="me" />
      </div>

      <div className="chat-detail__input">
        <TextArea placeholder="Type a message" autoSize />
        <button onClick={() => sendMessage()}>
          <IoSend color="white" fontSize={"35px"} />
        </button>
      </div>
    </div>
  );
}

export default RoomChatDetail;
