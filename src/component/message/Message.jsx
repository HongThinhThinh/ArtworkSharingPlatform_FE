import React from "react";
import "./Message.scss";

function Message({ me, text }) {
  return (
    <div className={`message ${me}`}>
      <div className="message__detail">
        <div className="message__detail__avatar">
          <img
            src="https://demoda.vn/wp-content/uploads/2022/01/anh-dai-dien-avt-anime-nen-xanh-la-553x600.jpg"
            alt=""
          />
        </div>
        <div className="message__detail__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
