import React, { useEffect, useRef, useState } from "react";
import Message from "../message/Message";
import { IoSend } from "react-icons/io5";
import { Input } from "antd";
import "./RoomChatDetail.scss";
import { BsImageFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useStateValue } from "../../Context/StateProvider";
import { useParams } from "react-router-dom";
import api from "../../config/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import useRealtime from "../../assets/hook/useRealTime";
const { TextArea } = Input;

function RoomChatDetail() {
  const { theme, setShowChatList, setActive } = useStateValue();
  const messagesContainerRef = useRef();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const user = useSelector(selectUser);
  const params = useParams();

  const [typing, setTyping] = useState("");
  const messageEnd = useRef();
  useRealtime(async (body) => {
    if (body.body === "New message") {
      await fetch();
      messagesContainerRef.current.scrollBot =
        messagesContainerRef.current.scrollHeight;
    } else {
      setTyping(body.body);
      setTimeout(() => {
        setTyping("");
      }, 2000);
    }
  });
  useEffect(() => {
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }, []);

  const fetch = async () => {
    try {
      const res = await api.get(`/chat/detail/${params.id}`);
      console.log(res.data);
      // console.log(res.data.users);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, [params.id]);
  useEffect(() => {
    // Scroll to the bottom when the messages update
    console.log(messageEnd.current);
    if (messageEnd.current) {
      messageEnd.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log(data.messages);
  }, [data.messages]);
  const sendMessage = async () => {
    const res = await api.post(`/chat/send/${params.id}`, {
      message: message,
    });
    console.log(res.data);
  };
  return (
    <div className="chat-detail">
      <div className="chat-detail__header">
        <div
          onClick={() => {
            setShowChatList(true);
            setActive(0);
          }}
          className="chat-detail__header__back"
        >
          <IoIosArrowBack fontSize={"30px"} />
        </div>

        <img
          src={data?.users?.filter((item) => item.id != user.id)[0].avt}
          alt=""
        />
        <div className="header__info">
          <span>
            {data?.users?.filter((item) => item.id != user.id)[0].name}
          </span>
          <div className="status">
            <div className="dot"></div>
            <span>online</span>
          </div>
        </div>
      </div>
      <div className="chat-detail__messages" ref={messagesContainerRef}>
        {/* <Message />
        <Message me="me" /> */}

        {data?.messages?.map((item, index) => (
          <div
            key={item.id}
            ref={index === data?.messages?.length - 1 ? messageEnd : null}
          >
            <Message
              ref={index === data?.messages?.length - 1 ? messageEnd : null}
              text={item.message}
              me={item.user.id === user.id ? "me" : ""}
            />
          </div>
        ))}
      </div>
      {typing}
      <div className="chat-detail__input">
        <TextArea
          onChange={(e) => setMessage(e.target.value)}
          onInput={async () => {
            const response = await api.post(
              `/chat/typing/${params.id}/${user.name}`
            );
          }}
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
          <button onClick={sendMessage}>
            <IoSend color={theme ? "#fff" : "#000"} fontSize={"25px"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomChatDetail;
