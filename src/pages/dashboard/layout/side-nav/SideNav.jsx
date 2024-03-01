import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../component/logo/Logo";
import "./SideNav.scss";
import navDashboardConfig, {
  navpath,
} from "../../../../component/nav-dashboard/config";

function SideNav({}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = pathname.replace("/", "");
  const onClick = (e) => {
    navigate(navpath[e.key].path);
  };

  return (
    <>
      <div className="brand">
        <Logo type="white" />
      </div>
      <Menu
        onClick={onClick}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={navDashboardConfig}
        className="menu-sidebar"
      />
    </>
  );
}

export default SideNav;
