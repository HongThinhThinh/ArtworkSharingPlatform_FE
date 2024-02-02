import React from "react";
import "./ListFeedback.scss";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";
import RoomMessage from "../roomMessage/RoomMessage";
import { BiSend } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa6";

function ListFeedback() {
  return (
    <div className="listFeedback">
      <RoomMessage
        avt="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405274365_1295058761205189_4884784238252082746_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=SfSAh7w5UUIAX9VNPky&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAEoxvG68QbPMPmLHwG7NtiT4P8toTZmBnknMPgiRMvBg&oe=65C11307"
        name="HongThinh"
        lastMessage="Available for working"
        icon={<FaRegCircle />}
      />
      <div className="listFeedback--contentt">
        <h2>The mushroom</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia</p>
      </div>
      <div className="listFeedback--interact">
        <div className="listFeedback--interact__like">
          <FaHeart /> 1320 likes
        </div>
        <div className="listFeedback--interact__cmt">
          <AiOutlineComment /> 2312 comments
        </div>
        <div className="listFeedback--interact__share">
          <MdOutlineIosShare /> 1320 likes
        </div>
      </div>
      <div className="listFeedback--comments">
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/401376601_1295831231127942_4331203260278541816_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=khBll3vYxFIAX8oZglO&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfC_vA5TH_ziDrMOHbZolUo0SnXOQaZhTd4ILYkX1N4Svw&oe=65C1D910"
            name="Thinh"
            lastMessage="hok dep "
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg"
            name="HungLd"
            lastMessage="Em nghĩ vậy nhưng thực tế nó không có vậy !"
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://i.pinimg.com/736x/4e/41/80/4e41806d170438330304b85351eda597.jpg"
            name="HuongNTC"
            lastMessage="10diem ko noi nhieu~"
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/378272785_1735223410243611_1995810556604592067_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_ohc=HR6lQ_-0E2UAX-bvoYQ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCEyLGqRf3Vu7BuaCW34dq5iFdAG0GZ2OMfC7-ALXWqRw&oe=65C27403"
            name="Đỗ Minh"
            lastMessage="Tuyet voi"
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/371952770_1687598791653005_2818414484473798316_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ECtr5jGSdyUAX9IYALo&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBM2KOEYtma3BZXdhj-rzmrnLWuC2yQ1lFVWjjwn3H25A&oe=65C161DC"
            name="Nhi Nguyễn"
            lastMessage="Kìn chá nà"
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://png.pngtree.com/png-clipart/20220902/ourmid/pngtree-cute-crab-png-image_6134682.png"
            name="Trân Nguyễn( chúa tể testing )"
            lastMessage="Bên bạn cần mình test dùm cái web hok?"
          />
        </div>
      </div>
      <div className="listFeedback--input">
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
          alt=""
        />
        <div className="listFeedback--input_wrap">
          <input type="text" />
          <div className="listFeedback--input_wrap__send">
            <BiSend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFeedback;
