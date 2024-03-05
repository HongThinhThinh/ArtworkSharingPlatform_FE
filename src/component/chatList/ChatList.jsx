import React, { useEffect, useState } from "react";
import "./ChatList.scss";
import { FaEdit } from "react-icons/fa";
import RoomMessage from "../roomMessage/RoomMessage";
import { useStateValue } from "../../Context/StateProvider";
import api from "../../config/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { useNavigate, useParams } from "react-router-dom";
import useRealtime from "../../assets/hook/useRealTime";

function ChatList() {
  const { theme, setShowSearchFriends, active, setActive } = useStateValue();
  const [data, setData] = useState([]);
  // const [user, setUser] = useState([]);
  const user = useSelector(selectUser);
  const { id } = useParams();

  useRealtime(async (body) => {
    if (body.body === "New message") {
      await fetch();
    } 
  });

  const fetch = async () => {
    try {
      const res = await api.get("/chat");
      console.log(res.data);
      // console.log(res.data.users);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
   
    fetch();
  }, []);

  return (
    <>
      <div className="chat-list">
        <div className="chat-list__information">
          <div className="chat-list__information__left">
            <img
              src="https://demoda.vn/wp-content/uploads/2022/01/anh-dai-dien-avt-anime-nen-xanh-la-553x600.jpg"
              alt=""
            />
            <span>{user?.name}</span>
          </div>
          <div
            className="chat-list__information__right"
            onClick={() => setShowSearchFriends(true)}
          >
            <FaEdit fontSize={"20px"} color={theme ? "#fff" : "#000"} />
          </div>
        </div>
        <h3>Message</h3>
        <div className="chat-list__items">
          {data.map((room) => (
            <RoomMessage
              key={room.roomID}
              room={room.roomID}
              active={active}
              setActive={setActive}
              avt={room.users.filter((item) => item.id != user.id)[0].avt}
              name={room.users.filter((item) => item.id != user.id)[0].name}
              lastMessage={room.lastMessage}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatList;
