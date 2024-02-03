import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import SideNav from "../side-nav/Sidenav";
import Header from "../header-dasboard/Header";
import "./Main.scss";
import { LeftCircleFilled, LeftCircleTwoTone } from "@ant-design/icons";

const { Content, Sider } = Layout;

function Main({ children }) {
  const [isExpand, setIsExpand] = useState(true);
  const [visible, setVisible] = useState(false);

  const openDrawer = () => setVisible(!visible);

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  return (
    <Layout className="layout-dashboard">
      <Drawer
        title={false}
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key="left"
        width={300}
        className="drawer-sidebar"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <Layout>
          <SideNav />
        </Layout>
      </Drawer>

      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={isExpand ? 300 : 90}
        style={{
          backgroundColor: "transparent",
          borderRadius: "50px",
          transition: "all 0.5s ease-out",
        }}
        className="sider-primary ant-layout-sider-primary sider-toggle"
      >
        <LeftCircleFilled
          className={`expand-icon ${!isExpand ? "rotate" : ""}`}
          onClick={() => setIsExpand(!isExpand)}
        />
        <SideNav style={{ width: "100%" }} isExpand={isExpand} />
      </Sider>

      <Layout>
        <Header onPress={openDrawer} name={pathname} subName={pathname} />
        <Content className="content-ant">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;