import React from "react";
import { Link } from "react-router-dom";
import "./SignInUp.scss";
import { Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/counterSlice";

function Account() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="signInUp">
      {/* <Link className="signInUp__login" to="/login">
        Log in
      </Link> */}
      <Avatar
        style={{ height: "3em", width: "3em", transform: "translateX(-2em)" }}
        src={user.avt}
      />
      <Link
        className="signInUp__signup"
        to="/"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(logout());
        }}
      >
        Logout
      </Link>
    </div>
  );
}

export default Account;
