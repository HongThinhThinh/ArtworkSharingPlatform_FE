import React, { useEffect, useState } from "react";
import "./WorkartInfo.scss";
import { HeartFilled, EyeFilled, CommentOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { getCurrentDateTime } from "../../assets/hook/useGetTime";
import { selectUser } from "../../redux/features/counterSlice";
import { useSelector } from "react-redux";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";

function WorkartInfo({
  idCreator,
  idArtwork,
  name,
  avatar,
  countLike,
  countComment,
  interactionLike,
  price,
}) {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const user = useSelector(selectUser);
  const [number, setNumber] = useState(countLike);
  console.log(price);
  useEffect(() => {
    const check = interactionLike?.filter(
      (item) => item.user?.id === user?.id
    )[0];
    if (check !== undefined) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);

  const sendLike = async () => {
    try {
      const res = await api.post("/send-interaction", {
        createDate: getCurrentDateTime(),
        type: "like",
        artworkId: idArtwork,
      });
      setLike(true);
      setNumber(countLike + 1);
    } catch (e) {
      if (
        e.response.data === "Expired Token!" ||
        e.response.data == "Invalid Token!"
      ) {
        alertFail("You need to login first");
        navigate(`/login`);
      }
      if (e.response.data === "dislike") {
        const res123 = await api.put("/disLike", {
          artworkId: idArtwork,
        });
        setLike(false);
        setNumber(number - 1);
      }
    }
  };
  return (
    <div className="info">
      <div
        onClick={() => navigate(`/creator/${idCreator}`)}
        className="info__right"
      >
        <Avatar style={{ height: "1.7em", width: "1.7em" }} src={avatar} />
        <Typography className="info__right__name">{name}</Typography>
        {price > 0 ? <div className="info__right__tag">PRO</div> : ""}
      </div>
      <div className="info__left">
        <div onClick={() => sendLike()} className="info__left__favorites">
          {like ? (
            <HeartFilled
              className="info__left__favorites__icon"
              style={{ color: "red" }}
            />
          ) : (
            <HeartFilled className="info__left__favorites__icon" />
          )}
          <Typography className="info__left__favorites__subInfo">
            {number}
          </Typography>
        </div>
        <div
          onClick={() => {
            navigate(`/artworkDetails/${idArtwork}`);
          }}
          className="info__left__seens"
        >
          <CommentOutlined className="info__left__seens__icon" />
          <Typography className="info__left__seens__subInfo">
            {countComment}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default WorkartInfo;
