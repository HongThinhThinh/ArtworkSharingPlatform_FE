import React from "react";
import ImgPreview from "../../pages/Image/Image";
import "./PostView.scss";
import { Button, Modal } from "antd";
import { IoMdTime } from "react-icons/io";
function PostView({img,title}) {
  return (
    <div className="postview" >
      <ImgPreview
        width={300}
        height={250}
        style={{ borderRadius: "10px", border: "none", outline: "none" }}
        src={img}
       
      />
      <div className="postview__content">
        <div className="postview__content__info">
          <img src="https://cdn.dribbble.com/users/31348/avatars/normal/27c9b6b5f30020754935a86969f3c7a8.png?1682367368" />

          <div className="postview__content__info__details">
            <h4>DKNG</h4>
            <p> 1 hour ago</p>
          </div>
        </div>
        <h1>{title}</h1>
        <p>
          In celebration of beach festivals and dreaming of warm summer days
          ahead, all of our beach themed prints and products are on sale for 25%
          off, for 24 hours only! Sale ends at 12pm PT on Wednesday, 1/31. 25%
          discount automatically applied at checkout.
        </p>

        <div className="postview__content__button">
          <Button className="postview__content__button__detail">Accept</Button>
          <Button className="postview__content__button__detail">Deny</Button>
        </div>
      </div>
      <Modal title="Reason deny" >
        <h5>444</h5>
      </Modal>
    </div>
  );
}

export default PostView;
