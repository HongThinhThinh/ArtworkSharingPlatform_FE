import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../component/logo/Logo";
import "./SideNav.scss";
import navDashboardConfig, {
  navDashboardConfigMod,
  navpath,
} from "../../../../component/nav-dashboard/config";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../../redux/features/counterSlice";
import { AiOutlineLogout } from "react-icons/ai";

function SideNav({}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = pathname.replace("/", "");
  const dispatch = useDispatch();
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
        items={
          user.role == "ADMIN" ? navDashboardConfig : navDashboardConfigMod
        }
        className="menu-sidebar"
      />
      <div
        className="ant-menu-item"
        style={{ marginLeft: "2em", display: "flex" }}
        onClick={() => {
          localStorage.removeItem("token");
          //save redux
          dispatch(logout());
          navigate("/");
        }}
      >
        <AiOutlineLogout
          className="anticon"
          style={{ fontSize: "1.5em", marginRight: "0.5em" }}
        />{" "}
        <span
          className="ant-menu-title-content"
          style={{ fontFamily: "MediumCereal" }}
        >
          Logout
        </span>
      </div>
    </>
  );
}

export default SideNav;
