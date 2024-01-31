import { Avatar, Button, Dropdown, Space } from "antd";
import React from "react";
import "./CreatorInfo.scss";
import CreatorSocial from "../creatorSocial/CreatorSocial";
import {
  CompassOutlined,
  DownOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";

function CreatorInfo({
  avatar,
  name,
  openingLine,
  followers,
  following,
  likes,
}) {
  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Add or remove from lists...
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Block {name}
        </a>
      ),
      key: "1",
    },

    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Report {name}
        </a>
      ),
      key: "3",
    },
  ];
  return (
    <div className="creator-info">
      <Avatar className="creator-info__avatar" src={avatar} />
      <h3 className="creator-info__name">{name}</h3>
      <h1 className="creator-info__openLine">{openingLine}</h1>
      <CreatorSocial
        followers={followers}
        following={following}
        likes={likes}
      />
      <div className="creator-info__contact">
        <Button className="creator-info__contact__getInTouch">
          Get In Touch
        </Button>
        <Button className="creator-info__contact__follow">Follow</Button>

        <Dropdown
          className="creator-info__contact__dropdownCreator"
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Button>...</Button>
        </Dropdown>
      </div>

      <div className="creator-info__position">
        <div className="creator-info__position__location">
          <CompassOutlined className="creator-info__position__location__icon" />
          Tallinn, Estonia
        </div>
        <div className="creator-info__position__isPro">
          <StarFilled className="creator-info__position__isPro__icon" />
          Cremo Pro
        </div>
        <div className="creator-info__position__since">
          <UserOutlined className="creator-info__position__since__icon" />
          Member since Mar 2020
        </div>
      </div>
      <div className="creator-info__skill">
        <h3 className="creator-info__skill__title">Skill</h3>
        <div className="creator-info__skill__tags">
          <div className="creator-info__skill__tags__tag">art direction</div>
          <div className="creator-info__skill__tags__tag">design system</div>
          <div className="creator-info__skill__tags__tag">leadership</div>
          <div className="creator-info__skill__tags__tag">mobile design</div>
          <div className="creator-info__skill__tags__tag">team management</div>
          <div className="creator-info__skill__tags__tag">ux research</div>
          <div className="creator-info__skill__tags__tag">web design</div>
        </div>
      </div>
    </div>
  );
}

export default CreatorInfo;
