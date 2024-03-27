import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../component/logo/Logo";
import "./SideNav.scss";
import navDashboardConfig, {
  navDashboardConfigMod,
  navpath,
} from "../../../../component/nav-dashboard/config";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/features/counterSlice";

function SideNav({}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = pathname.replace("/", "");
  const onClick = (e) => {
    navigate(navpath[e.key].path);
  };
  const user = useSelector(selectUser);

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
        items={user.role == "ADMIN" ? navDashboardConfig : navDashboardConfigMod }
        className="menu-sidebar"
      />
    </>
  );
}

export default SideNav;
