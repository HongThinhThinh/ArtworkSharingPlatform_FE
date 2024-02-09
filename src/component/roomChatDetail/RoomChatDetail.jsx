import React, { useEffect, useRef } from "react";
import Message from "../message/Message";
import { IoSend } from "react-icons/io5";
import { Input } from "antd";
import "./RoomChatDetail.scss";
import { BsImageFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useStateValue } from "../../Context/StateProvider";
const { TextArea } = Input;

function RoomChatDetail() {
  const { theme, setShowChatList,setActive } = useStateValue();
  const messagesContainerRef = useRef();
  useEffect(() => {
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }, []);

  return (
    <div className="chat-detail">
      <div className="chat-detail__header">
        <div onClick={() => {setShowChatList(true);setActive(0)}} className="chat-detail__header__back">
        <IoIosArrowBack fontSize={"30px"}/>
        </div>
        

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
        <TextArea
          placeholder="Type a message"
          autoSize
          style={{
            backgroundColor: theme ? "#2b2c32" : "#f6f6f6",
            color: theme ? "#fff" : "#000",
          }}
        />

        <div className="chat-detail__input__iconSend">
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => {
              setImg(e.target.files[0]);
              handleSend(e.target.files[0]);
            }}
          />
          <label htmlFor="file">
            <BsImageFill fontSize={"25px"} cursor={"pointer"} />
          </label>
          <button onClick={() => sendMessage()}>
            <IoSend color={theme ? "#fff" : "#000"} fontSize={"25px"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomChatDetail;
