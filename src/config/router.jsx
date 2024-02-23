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

import Test from "../test";
import CreatorManage from "../pages/creator/creator-manage/CreatorManage";
import RoomChat from "../pages/RoomChat/RoomChat";
import CreatorProduct from "../pages/creator/creator-product/CreatorProduct";
import CreatorProfile from "../pages/creator/creator-profile/CreatorProfile";
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

import WorkartMedia from "../component/workartMedia/WorkartMedia";
import WorkartSection from "../sections/workartSection/WorkartSection";
import WorkartInfo from "../component/workartInfo/WorkartInfo";
import Workart from "../component/workart/Workart";

import ConfirmSuccess from "../pages/confirmSuccess/ConfirmSuccess";

import FormRequest from "../component/formRequest/FormRequest";
import PostView from "../component/postView/PostView";



export const router = createBrowserRouter([

  {
    path: "/test",
    // element: <Test />,
    element:<PostView/>,
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
    path: "artworkDetails",
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
        path: "/profile",
        element: <AudienceProfile />,
        children: [
          {
            path: "/profile/likedShots",
            element: <CreatorWorkart />,
          },
          {
            path: "/profile/orders",
            element: <CreatorCollection />,
          },
        ],
      },
    ],
  },

  {
    path: "/creator",
    element: (
      <div>
        <Header />
        <CreatorPage />
      </div>
    ),
    children: [
      {
        path: "",
        element: <CreatorWorkart />,
      },
      {
        path: "/creator/work",
        element: <CreatorWorkart />,
      },
      {
        path: "/creator/collections",
        element: <CreatorCollection />,
      },
    ],
  },
]);
