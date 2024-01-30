import React from "react";
import RoomMessage from "../roomMessage/RoomMessage";
import { IoClose } from "react-icons/io5";
import { useStateValue } from "../../Context/StateProvider";
import "./FormSearchFriends.scss"


function FormSearchFriends() {
    const { setShowSearchFriends } = useStateValue();

  return (
    <>
      <div className="searchFriends">
        <div className="formSearch">
          <div className="formSearch__header">
            <div style={{ width: "30px" }}></div>
            <h3>New Message</h3>
            <div style={{cursor: "pointer"}} onClick={() => setShowSearchFriends(false)}>
              <IoClose fontSize={"30px"} />
            </div>
          </div>
          <div className="formSearch__input">
            <h5>Arrive: </h5>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="formSearch__friends">
            <RoomMessage room={12}/>
            <RoomMessage />
            <RoomMessage />
            <RoomMessage />
            <RoomMessage />
            <RoomMessage />
            <RoomMessage />
            <RoomMessage />
          </div>
        </div>
      </div>
      <div
        className="overlay"
        onClick={() => setShowSearchFriends(false)}
      ></div>
    </>
  );
}

export default FormSearchFriends;
