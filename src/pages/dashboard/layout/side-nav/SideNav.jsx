import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../../component/Logo/Logo";
import navDashboardConfig from "../../../../component/nav-dashboard/config";
import "./SideNav.scss";
function SideNav({ isExpand }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <Logo type="white" />
      </div>
      <Menu className="menu-sidebar" mode="inline">
        {navDashboardConfig.map((nav, index) => (
          <Menu.Item className="menu-sidebar__item" key={index} style={{}}>
            {nav.icon}
            {isExpand ? (
              <NavLink style={{ marginLeft: "1em" }} to={nav.path}>
                <span
                  className="menu-sidebar__item__label"
                  style={{ fontSize: "1em" }}
                >
                  {nav.title}
                </span>
              </NavLink>
            ) : null}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
}

export default SideNav;
