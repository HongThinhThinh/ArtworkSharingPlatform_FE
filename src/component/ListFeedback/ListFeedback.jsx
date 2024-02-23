import React, { useEffect, useState } from "react";
import "./ListFeedback.scss";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";
import RoomMessage from "../roomMessage/RoomMessage";
import { BiSend } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import ImgPreview from "../../pages/Image/Image";
import { IoMdClose } from "react-icons/io";
function ListFeedback({ title, description, avt, name }) {
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    console.log(isOpen);
    const close = document.querySelector(".listFeedback--interact__close");
    if (isOpen == true) {
      close.style.display = "block";
    } else {
      close.style.display = "none";
    }
  }, [isOpen]);
  return (
    <div className="listFeedback">
      <RoomMessage
        avt={avt || "abc"}
        name={name}
        lastMessage="Available for working"
        icon={<FaRegCircle />}
      />
      <div className="listFeedback--contentt">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {isMobile ? (
        <div className="artworkInfo--img__image">
          <ImgPreview src="https://images.unsplash.com/photo-1706650079705-160f2c07c913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      ) : null}
      <div className="listFeedback--interact">
        <div className="listFeedback--interact__like">
          <FaHeart /> 123k
        </div>
        {isMobile ? (
          <div
            className="listFeedback--interact__cmt"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineComment /> 120
            <div
              className="listFeedback--interact__close"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMdClose />
            </div>
          </div>
        ) : (
          <>
            <div className="listFeedback--interact__cmt">
              <AiOutlineComment /> 120
              <div className="listFeedback--interact__close">
                {/* <IoMdClose /> */}
              </div>
            </div>
          </>
        )}
        <div className="listFeedback--interact__share">
          <MdOutlineIosShare /> 20
        </div>
      </div>
      <div className="wrapListfeedback">
        {isOpen && (
          <div className="listFeedback--comments" style={{ height: "420px" }}>
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
                avt="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/371952770_1687598791653005_2818414484473798316_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ECtr5jGSdyUAX9IYALo&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBM2KOEYtma3BZXdhj-rzmrnLWuC2yQ1lFVWjjwn3H25A&oe=65C161DC"
                name="Nhi Nguyễn"
                lastMessage="Kìn chá nà"
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
            <div className="listFeedback--comments__detail">
              <RoomMessage
                avt="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/294230453_1016043015773433_1076043979386053547_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=DmO1N4VSn7YAX_pErxY&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCE6oF8cU5nUAVVOflRhcGTTy27wq2VPdfrBNApcuWWVw&oe=65C24A80"
                name="Thinh"
                lastMessage="hok dep "
              />
            </div>
          </div>
        )}
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
    </div>
  );
}

export default ListFeedback;
