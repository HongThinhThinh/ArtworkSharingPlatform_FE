import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";

import CreatorPage from "../pages/creator/CreatorPage";
import CreatorWorkart from "../sections/creatorWorkart/CreatorWorkart";
import CreatorCollection from "../sections/creatorCollection/CreatorCollection";

import CreatorManage from "../pages/creator/creator-manage/CreatorManage";
import RoomChat from "../pages/RoomChat/RoomChat";
import CreatorProduct from "../pages/creator/creator-product/CreatorProduct";
import CreatorSetting from "../pages/creator/creator-setting/CreatorSetting";
import FormArtwork from "../pages/addArtWork/FormArtWork";

import Main from "../pages/dashboard/layout/main-dashboard/Main";
import Mode from "../pages/dashboard/pages/mode/Mode";
import Overview from "../pages/dashboard/pages/overview/Overview";
import Posts from "../pages/dashboard/pages/posts/Posts";
import ReportedPosts from "../pages/dashboard/pages/reported-posts/ReportedPosts";
import Audiences from "../pages/dashboard/pages/audiences/Audiences";
import Creators from "../pages/dashboard/pages/creators/Creators";

import ArtworkDetails from "../pages/ArtworkDetails/ArtworkDetails";
import OTP from "../pages/verifyOTP/OTP";
import EditProfile from "../pages/creator/edit-profile/EditProfile";
import AudienceProfile from "../pages/audienceProfile/AudienceProfile";

import RequestOrder from "../pages/requestOrder/RequestOrder";

import ConfirmSuccess from "../pages/confirmSuccess/ConfirmSuccess";

import FormRequest from "../component/formRequest/FormRequest";

import PostView from "../component/postView/PostView";
import GoPro from "../pages/goPro/GoPro";
import JobsPage from "../pages/jobsPage/JobsPage";
import OrderHistory from "../sections/orderHistory/OrderHistory";
import Checkout from "../pages/checkout/Checkout";
import OptionUpgrate from "../component/optionUpgrade/OptionUpgrate";
import ViewOrderDetail from "../component/requestOrderDetail/ViewOrderDetail";
import RequestOrderDetail from "../component/requestOrderDetail/RequestOrderDetail";
import InProgressOrderDetail from "../component/requestOrderDetail/InProgressOrderDetail";
import ChatDetail from "../component/chatDetail/ChatDetail";

export const router = createBrowserRouter([
  {
    path: "/test",
    element: <RoomChat />,
    children: [
      {
        path: ":id",
        element: <ChatDetail />,

      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "confirm-success",
    element: <ConfirmSuccess />,
  },
  {
    path: "register",
    element: <SignUp />,
  },
  {
    path: "/password_resets/new",
    element: <ForgotPassword />,
  },
  {
    path: "/account/unverified",
    element: <OTP />,
  },
  {
    path: "/go-pro",
    element: <GoPro />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/dashboard/modes",
        element: <Mode />,
      },
      {
        path: "/dashboard/audiences",
        element: <Audiences />,
      },
      {
        path: "/dashboard/creators",
        element: <Creators />,
      },
      {
        path: "/dashboard/posts",
        element: <Posts />,
      },
      {
        path: "/dashboard/reported-posts",
        element: <ReportedPosts />,
      },
    ],
  },
  {
    path: "creator-manage",
    element: <CreatorManage />,
    children: [
      {
        path: "/creator-manage/artworks",
        element: <CreatorProduct />,
      },
      {
        path: "/creator-manage/room",
        element: <RoomChat />,
      },
      {
        path: "/creator-manage/addArtWork",
        element: <FormArtwork />,
      },
      {
        path: "/creator-manage/requestOrder",
        element: <RequestOrder />,
        children: [
          {
            path: "/creator-manage/requestOrder/requestOrderDetail/:id",
            element: <RequestOrderDetail />,
          },
        ],
      },
      {
        path: "/creator-manage/settings",
        element: <CreatorSetting />,
      },
      {
        path: "/creator-manage/edit",
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "/artworkDetails/:id",
    element: (
      <div>
        <ArtworkDetails />,
        <Footer />
      </div>
    ),
  },

  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      {
        path: "/profile",
        element: <AudienceProfile />,
        children: [
          {
            path: "/profile/likedShots",
            element: <CreatorWorkart />,
          },
          {
            path: "/profile/orders",
            element: <OrderHistory />,
          },
          {
            path: "/profile/orderDetail/:id",
            element: <ViewOrderDetail />,
          },
        ],
      },
    ],
  },

  {
    path: "/creator/:id",
    element: (
      <div>
        <Header />
        <CreatorPage />
      </div>
    ),
    children: [
      {
        path: "/creator/:id/work",
        element: <CreatorWorkart />,
      },
      {
        path: "/creator/:id/collections",
        element: <CreatorCollection />,
      },
    ],
  },
]);
