import React from "react";
import ImgPreview from "../../Image/Image";
import "./CreatorProfile.scss";
import Notification from "../../../component/notification/Notification";
import { useNavigate } from "react-router";
import EditProfile from "../edit-profile/EditProfile";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/counterSlice";
import { Button } from "antd";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import UserInfo from "../../../component/userInfo/UserInfo";
import { HeartTwoTone } from "@ant-design/icons";
function CreatorProfile() {
  const user = useSelector(selectUser);
  // console.log(user);
  return (
    <>
      <div className="wrap-creatorProfile "></div>
      <div className="wrap-creatorProfile-bottom">
        <UserInfo user={user} />
        <Link className="wallet" to="/creator-manage/purchase-history">
          Purchase History <BiSolidPurchaseTagAlt />
        </Link>
        <Link className="wallet" to="/creator-manage/wallet">
          Your Wallet <FaWallet />
        </Link>
        <Link className="order-btn" to="/creator-manage/orders">
          Your Order <FaBox />
        </Link>
        <Link className="heart" to="/creator-manage/likedShots">
          <HeartTwoTone twoToneColor="#C5547A" />
        </Link>
      </div>
    </>
  );
}

export default CreatorProfile;
