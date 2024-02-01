import CreatorInfo from "../../component/creatorInfo/CreatorInfo";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import ChangeTabCreator from "../../component/changeTabCreator/ChangeTabCreator";

const contentStyle = {
  backgroundColor: "#ffffff",
  overflowY: "scroll",
  paddingBottom: "7em",
};

const siderStyle = {
  background: "#f9f9f9",
  border: "1px solid #e8e8e8",
  margin: "3em 1em 1em 1em",
  padding: "1.5em",
  borderRadius: " 10px",
};

const layoutStyle = {
  backgroundColor: "#ffffff",
  display: "flex",
  height: "86vh",
};

function CreatorPage() {
  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle}>
        <CreatorInfo
          avatar="https://cdn.dribbble.com/users/4949363/avatars/normal/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
          name="Ronas IT | UI/UX Team"
          followers="9,511"
          following="1,325"
          likes="14,897"
          openingLine="We make complex applications simple for users"
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
