import React from "react";
import "./WorkartInfo.scss";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

function WorkartInfo({ name, avatar }) {
  return (
    <div className="info">
      <div className="info__right">
        <Avatar style={{ height: "1.7em", width: "1.7em" }} src={avatar} />
        <Typography className="info__right__name">{name}</Typography>
        <div className="info__right__tag">PRO</div>
      </div>
      <div className="info__left">
        <div className="info__left__favorites">
          <HeartFilled className="info__left__favorites__icon" />
          <Typography className="info__left__favorites__subInfo">
            100
          </Typography>
        </div>
        <div className="info__left__seens">
          <EyeFilled className="info__left__seens__icon" />
          <Typography className="info__left__seens__subInfo">20.2k</Typography>
        </div>
      </div>
    </div>
  );
}

export default WorkartInfo;
