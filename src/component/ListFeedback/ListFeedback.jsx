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
import { useNavigate } from "react-router-dom";
function ListFeedback({ title, description, avt, name, id }) {
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
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
      <div onClick={() => navigate(`/creator/${id}`)}>
        <RoomMessage
          avt={avt || "abc"}
          name={name}
          lastMessage="Available for working"
          icon={<FaRegCircle />}
        />
      </div>
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
                name="Mr.HungLd"
                lastMessage="10 điểm bao ra hội đồng"
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
                avt="https://i.pinimg.com/564x/1b/24/ac/1b24ac6dfd3fc14f2365eb93da2f84c2.jpg"
                name="Đỗ Minh"
                lastMessage="Tuyet voi"
              />
            </div>
            <div className="listFeedback--comments__detail">
              <RoomMessage
                avt="https://i.pinimg.com/564x/bf/c1/5f/bfc15f7f42a5ff420eb00fe54c0e0b1c.jpg"
                name="Nhi Nguyễn"
                lastMessage="Kìn chá nà"
              />
            </div>

            <div className="listFeedback--comments__detail">
              <RoomMessage
                avt="https://i.pinimg.com/564x/72/22/73/7222736f4512fc88ca0e475c2269f8d8.jpg"
                name="Thinh"
                lastMessage="hok dep "
              />
            </div>
            <div className="listFeedback--comments__detail">
              <RoomMessage
                avt="https://i.pinimg.com/564x/72/22/73/7222736f4512fc88ca0e475c2269f8d8.jpg"
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
