import React, { useState } from "react";
import "./ChatList.scss";
import { FaEdit } from "react-icons/fa";
import RoomMessage from "../roomMessage/RoomMessage";
import { useStateValue } from "../../Context/StateProvider";

function ChatList() {
  const { theme, setShowSearchFriends, active, setActive } = useStateValue();
  

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
            <FaEdit fontSize={"20px"} color={theme ? "#fff" : "#000"} />
          </div>
        </div>
        <h3>Message</h3>
        <div class="chat-list__items">
          <RoomMessage
            room={1}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf uaysgd ausgyd auysgd aysgdai sd yiag diag diasgdidia gdiagdiasgdi gi"
          />
          <RoomMessage
            room={2}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={3}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf uaysgd ausgyd auysgd aysgdai sd yiag diag diasgdidia gdiagdiasgdi gi"
          />
          <RoomMessage
            room={4}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={5}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf uaysgd ausgyd auysgd aysgdai sd yiag diag diasgdidia gdiagdiasgdi gi"
          />
          <RoomMessage
            room={6}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={7}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf uaysgd ausgyd auysgd aysgdai sd yiag diag diasgdidia gdiagdiasgdi gi"
          />
          <RoomMessage
            room={8}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={9}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf uaysgd ausgyd auysgd aysgdai sd yiag diag diasgdidia gdiagdiasgdi gi"
          />
          <RoomMessage
            room={10}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={11}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={12}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={13}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
          <RoomMessage
            room={14}
            active={active}
            setActive={setActive}
            avt="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
            name="Đỗ Minh"
            lastMessage="lorem sadas asdosw s aos sad vpssanf "
          />
        </div>
      </div>
    </>
  );
}

export default ChatList;
