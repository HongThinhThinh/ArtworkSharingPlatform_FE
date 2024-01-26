import React from "react";
import CreatorInfo from "../../component/creatorInfo/CreatorInfo";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import ChangeTabCreator from "../../component/changeTabCreator/ChangeTabCreator";

const contentStyle = {
  backgroundColor: "#ffffff",
  overflowY: "scroll",
};

const siderStyle = {
  textAlign: "center",
  background:
    "linear-gradient(-160deg, rgba(255,255,255,1) 50%, rgba(44,57,112,1) 100%)",
  borderRight: "1px solid #EEEDEB",
};

const layoutStyle = {
  backgroundColor: "#ffffff",
  display: "flex",
  height: "86vh",
};

function CreatorPage() {
  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        <CreatorInfo
          avatar="https://cdn.dribbble.com/users/4949363/avatars/normal/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
          name="Ronas IT | UI/UX Team"
          followers="9,511"
          following="1,325"
          likes="14,897"
        />
      </Sider>
      <Content width="75%" style={contentStyle}>
        <ChangeTabCreator />
        <Outlet />
      </Content>
    </Layout>
  );
}

export default CreatorPage;
