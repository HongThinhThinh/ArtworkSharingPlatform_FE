import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./RoomMessage.scss"

function RoomMessage({room}) {
    const {setIdRoomChat,setShowSearchFriends } = useStateValue();

    const setShow = () => {
        setIdRoomChat(room)
        setShowSearchFriends(false)
    }

  return (
    <div class="item" onClick={()=>setShow()}>
      <img
        src="https://demoda.vn/wp-content/uploads/2022/01/anh-dai-dien-avt-anime-nen-xanh-la-553x600.jpg"
        alt=""
      />
      <div class="item__detail">
        <h4>Đỗ Minh</h4>
        <span>
          Lorem ipsum, dolor sit amet consect áhdf akshdv áhdg ạhdv ạhdv ạhdvas
          dyiuasgdiyadjhv auysfd áuyfd ádgf ạdf ạdv ạdcv
        </span>
      </div>
    </div>
  );
}

export default RoomMessage;
