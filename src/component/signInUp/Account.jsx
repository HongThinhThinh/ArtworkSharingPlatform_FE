import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignInUp.scss";
import { Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/counterSlice";

function Account() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="signInUp">
      {/* <Link className="signInUp__login" to="/login">
        Log in
      </Link> */}
      <Avatar
        onClick={() => navigate("/profile")}
        style={{
          height: "3em",
          width: "3em",
          transform: "translateX(-2em)",
          cursor: "pointer",
        }}
        src={user.avt}
      />
      <Link
        className="signInUp__signup"
        to="/"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </Link>
    </div>
  );
}

export default Account;
