import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import api from "../../config/axios";
import { getCurrentDateTime } from "../../assets/hook/useGetTime";
import ButtonBuy from "../buttonBuy/ButtonBuy";
import { MdOutlineReportProblem } from "react-icons/md";
import { alertFail } from "../../assets/hook/useNotification";

function ListFeedback({
  idArtwork,
  title,
  description,
  avt,
  name,
  id,
  setOpenUpdate,
  setOpenDelete,
  setOpenReport,
  countLike,
  countComment,
  interactionLike,
  interactionComment,
  price,
}) {
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  const [isOpen, setIsOpen] = useState(true);
  const [comment, setComment] = useState("");
  const [dataComment, setDataComment] = useState({});
  const [like, setLike] = useState(false);
  const commentRef = useRef();
  const [creator, setCreator] = useState();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const showModal = () => {
    setOpenUpdate(true);
  };

  const showModalDelete = () => {
    setOpenDelete(true);
  };
  const showModalReport = () => {
    setOpenReport(true);
  };
  const params = useParams();
  console.log(params);
  const sendComment = async () => {
    if (comment !== "") {
      try {
        const res = await api.post("/send-interaction", {
          content: comment,
          createDate: getCurrentDateTime(),
          type: "comment",
          artworkId: idArtwork,
        });
        setComment("");
        setDataComment(res.data.data);
      } catch (e) {
        if (
          e.response.data === "Expired Token!" ||
          e.response.data === "Invalid Token!"
        ) {
          alertFail("You must be logged in");
          navigate(`/login`);
        }
      }
    }
  };

  const handleBuy = async () => {
    try {
      const res = await api.post(`/buyArtwork/${params.id}`, {});
      console.log(res.data.data);
      navigate(
        `/your-bill?idArtwork=${params.id}&transactionId=${res.data.data.transaction.transactionID}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  const sendLike = async () => {
    try {
      const res = await api.post("/send-interaction", {
        createDate: getCurrentDateTime(),
        type: "like",
        artworkId: idArtwork,
      });
    } catch (e) {
      if (
        e.response.data === "Expired Token!" ||
        e.response.data === "Invalid Token!"
      ) {
        alertFail("You must be logged in");
        navigate(`/login`);
      }
      if (e.response.data === "dislike") {
        const res123 = await api.put("/disLike", {
          artworkId: idArtwork,
        });
      }
    }
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendComment();
    }
  }

  useEffect(() => {
    const check = interactionLike.filter(
      (item) => item.user?.id === user?.id
    )[0];
    if (check !== undefined) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [interactionLike]);

  useEffect(() => {
    commentRef.current.scrollTop = commentRef.current.scrollHeight;
  }, [interactionComment]);

  const content = (
    <div className="edit-artwork-popup">
      <Button onClick={showModal}>Update</Button>
      <Button onClick={showModalDelete}>Delete</Button>
    </div>
  );

  useEffect(() => {
    const close = document.querySelector(".listFeedback--interact__close");
    if (isOpen == true) {
      close.style.display = "block";
    } else {
      close.style.display = "none";
    }
  }, [isOpen]);
  return (
    <div className="listFeedback">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ backgroundColor: "white", width: "100%" }}>
          <div onClick={() => navigate(`/creator/${id}`)}>
            <RoomMessage
              avt={avt || "abc"}
              name={name}
              lastMessage="Available for working"
              icon={<FaRegCircle />}
            />
          </div>
          {price > 0 && id != user?.id ? (
            <div
              onClick={handleBuy}
              style={{ position: "absolute", right: "30px", top: "30px" }}
            >
              <ButtonBuy />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {id == user?.id ? (
        <Popover placement="bottomRight" content={content}>
          <EllipsisOutlined
            style={{
              float: "right",
              transform: "translateY(-2.6em) translateX(-1em)",
              padding: "1px",
              cursor: "pointer",
              zIndex: 10,
              borderRadius: "100px",
              border: "2px solid black",
            }}
          />
        </Popover>
      ) : (
        " "
      )}

      <div className="listFeedback--contentt">
        <h2> Title: {title}</h2>
        <p>Description: {description}</p>
        {price > 0 ? (
          <h2 style={{ fontSize: "17px" }}>
            price :<span style={{ color: "#3eac4e" }}>{` ${price} $`}</span>
          </h2>
        ) : (
          ""
        )}
      </div>

      {isMobile ? (
        <div className="artworkInfo--img__image">
          <ImgPreview src="https://images.unsplash.com/photo-1706650079705-160f2c07c913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      ) : null}
      <div className="listFeedback--interact">
        <div onClick={sendLike} className="listFeedback--interact__like">
          {like ? <FaHeart color="red" /> : <FaHeart />} {countLike}
        </div>
        {isMobile ? (
          <div
            className="listFeedback--interact__cmt"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineComment /> {countComment}
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
              <AiOutlineComment /> {countComment}
              <div className="listFeedback--interact__close">
                {/* <IoMdClose /> */}
              </div>
            </div>
          </>
        )}
        {/* <div
          className="listFeedback--interact__share"
          onClick={showModalReport}
        >
          <MdOutlineReportProblem />
        </div> */}

        {user.name == name ? (
          ""
        ) : (
          <div
            className="listFeedback--interact__share"
            onClick={showModalReport}
          >
            <MdOutlineReportProblem />
          </div>
        )}
      </div>
      <div className="wrapListfeedback">
        {isOpen && (
          <div
            className="listFeedback--comments"
            style={{ height: "390px" }}
            ref={commentRef}
          >
            {interactionComment?.map((item) => (
              <div className="listFeedback--comments__detail">
                <RoomMessage
                  avt={item.user?.avt}
                  name={item.user?.name}
                  lastMessage={item?.content}
                />
              </div>
            ))}
          </div>
        )}
        {user == null ? (
          ""
        ) : (
          <>
            <div className="listFeedback--input">
              <img src={user?.avt} alt="" />
              <div className="listFeedback--input_wrap">
                <input
                  value={comment}
                  onInput={(e) => setComment(e.target.value)}
                  type="text"
                  onKeyDown={handleKeyDown}
                />
                <div
                  onClick={sendComment}
                  style={{ cursor: "pointer" }}
                  className="listFeedback--input_wrap__send"
                >
                  <BiSend />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListFeedback;
