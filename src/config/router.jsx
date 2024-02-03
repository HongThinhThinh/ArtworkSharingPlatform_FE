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
import ArtworkDetails from "../pages/ArtworkDetails/ArtworkDetails";

export const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "login",
    element: <Login />,
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
        path: "/creator-manage/profile",
        element: <CreatorProfile />,
      },
      {
        path: "/creator-manage/settings",
        element: <CreatorSetting />,
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
