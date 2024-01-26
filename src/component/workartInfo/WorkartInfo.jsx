import React from "react";
import "./WorkartInfo.scss";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

function WorkartInfo() {
  return (
    <div className="info">
      <div className="info__right">
        <Avatar
          style={{ height: "1.7em", width: "1.7em" }}
          src="https://cdn.dribbble.com/users/3365798/avatars/small/27142d0984a19231593be35a9972bbc4.jpg?1673891024"
        />
        <Typography className="info__right__name">Coric Design</Typography>
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
