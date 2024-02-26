import { Avatar, Button, Dropdown, Space } from "antd";
import React, { useState } from "react";
import "./CreatorInfo.scss";
import CreatorSocial from "../creatorSocial/CreatorSocial";
import {
  CompassOutlined,
  DownOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import FormRequest from "../formRequest/FormRequest";

function CreatorInfo({
  avatar,
  name,
  openingLine,
  followers,
  following,
  likes,
  tags,
  position,
}) {
  const [status, setStatus] = useState(false);
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
    <div className={`creator-info ${position == "top" ? "top" : ""}`}>
      <div className="creator-info-res">
        <div style={{ marginTop: "1.2em" }}>
          <Avatar className="creator-info__avatar" src={avatar} />
        </div>
        <div style={{ marginLeft: "1em" }}>
          <h3 className="creator-info__name">{name}</h3>
          <h1 className="creator-info__openLine">{openingLine}</h1>
          <CreatorSocial
            followers={followers}
            following={following}
            likes={likes}
          />

          <div className="creator-info__contact">
            <Button
              className="creator-info__contact__getInTouch"
              onClick={() => setStatus(!status)}
            >
              Get In Touch
            </Button>
            <FormRequest status={status} setStatus={() => setStatus(!status)} />
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
      </div>
      <div className="creator-info__position">
        <div
          className="creator-info__position__location"
          style={{ marginLeft: "1em" }}
        >
          <CompassOutlined className="creator-info__position__location__icon" />
          Tallinn, Estonia
        </div>
        <div
          className="creator-info__position__isPro"
          style={{ marginLeft: "1em" }}
        >
          <StarFilled className="creator-info__position__isPro__icon" />
          Cremo Pro
        </div>
        <div
          className="creator-info__position__since"
          style={{ marginLeft: "1em" }}
        >
          <UserOutlined className="creator-info__position__since__icon" />
          Member since Mar 2020
        </div>
      </div>

      <div className="creator-info__skill" style={{ marginLeft: "2em" }}>
        <h3 className="creator-info__skill__title">Skill</h3>
        <div className="creator-info__skill__tags">
          {tags.slice(0, 2).map((item) => (
            <div className="creator-info__skill__tags__tag">{item}</div>
          ))}
          <div className="creator-info__skill__tags__tag">
            +{tags.length - 3}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorInfo;
