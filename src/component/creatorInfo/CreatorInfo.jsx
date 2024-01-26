import { Avatar, Button, Dropdown, Space } from "antd";
import React from "react";
import "./CreatorInfo.scss";
import CreatorSocial from "../creatorSocial/CreatorSocial";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

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
    </div>
  );
}

export default CreatorInfo;
