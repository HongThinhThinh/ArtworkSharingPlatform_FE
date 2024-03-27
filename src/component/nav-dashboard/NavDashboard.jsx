import React, { useState } from "react";
import "./NavDashboard.scss";
import navDashboardConfig, { navDashboardConfigMod } from "./config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";


function NavDashboard() {
  const [isActive, setIsActive] = useState(2);
  const user = useSelector(selectUser);
  return (
    <div className="dashboard-navigator">
      {(user.role == "ADMIN" ? navDashboardConfig : navDashboardConfigMod).map((nav, index) => (
        <Link
          className={`dashboard-navigator__nav ${
            isActive == index ? "active" : ""
          }`}
          onClick={() => setIsActive(index)}
          to={nav.path}
          key={index}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}

export default NavDashboard;
