import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
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
import AboutUs from "../pages/dashboard/pages/about-us/AboutUs";

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
import ChatDetail from "../component/chatDetail/ChatDetail";
import WalletPage from "../pages/WalletPage/WalletPage";

import PrintBill from "../pages/PrintBill/PrintBill";

import WatermarkArtwork from "../component/waterMask/WatermarkArtwork";
import PurchaseHistoryCard from "../component/purchase-history-card/PurchaseHistoryCard";
import PurchaseHistory from "../pages/PurchaseHistory/PurchaseHistory";
import LikedShots from "../sections/LikedShots/LikedShots";
import FormSignupMod from "../component/formSignupMod/FormSignupMod";
import SearchResult from "../pages/searchResult/SearchResult";
import SearchUser from "../pages/dashboard/pages/searchUser/SearchUser";
import Error404 from "../pages/error404/Error404";
import ViewTransaction from "../pages/view-transaction/ViewTransaction";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/features/counterSlice";
import { alertFail } from "../assets/hook/useNotification";

import ReportHistory from "../pages/dashboard/pages/report-history/ReportHistory";
import CategorySelector from "../component/categorySellector/CategorySelector";

import CategoryPage from "../pages/dashboard/pages/category/CategoryPage";

import ViewWithdraw from "../pages/viewWithdraw/ViewWithdraw";
import AIPage from "../pages/dashboard/pages/AI/AIPage";

const ProtectedRouteAuth = ({ children }) => {
  const user = useSelector(selectUser);
  if (!user) {
    alertFail("You need to login first!!");
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ProtectedRouteCreator = ({ children }) => {
  const user = useSelector(selectUser);
  console.log(user);
  if (user?.role === "AUDIENCE") {
    alertFail("You do not have permissions to access");
    return <Navigate to="/go-pro" replace />;
  }
  return children;
};

const ProtectedADMIN = ({ children }) => {
  const user = useSelector(selectUser);
  console.log(user);
  if (user?.role !== "ADMIN") {
    if (user?.role !== "MOD") {
      alertFail("You do not have permissions to access");
      return <Navigate to="/" replace />;
    }
  }
  return children;
};

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/room-messages",
    element: <RoomChat />,
    children: [
      {
        path: ":id",
        element: (
          <ProtectedRouteAuth>
            <ChatDetail />
          </ProtectedRouteAuth>
        ),
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
    path: "error",
    element: <Error404 />,
  },
  {
    path: "test",
    element: <CategorySelector />,
  },
  {
    path: "test01",
    element: <FormSignupMod />,
  },

  {
    path: "test2",
    element: <WatermarkArtwork />,
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
    path: "/your-bill",
    element: (
      <ProtectedRouteAuth>
        <PrintBill />
      </ProtectedRouteAuth>
    ),
  },

  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedADMIN>
        <Main />
      </ProtectedADMIN>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/dashboard/search?",
        element: <SearchUser />,
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
      {
        path: "/dashboard/view-transaction",
        element: <ViewTransaction />,
      },
      {
        path: "/dashboard/categories",
        element: <CategoryPage />,
      },
      {
        path: "/dashboard//view-widthdraw",
        element: <ViewWithdraw />,
      },
    ],
  },
  {
    path: "creator-manage",
    element: (
      <ProtectedRouteCreator>
        <CreatorManage />
      </ProtectedRouteCreator>
    ),
    children: [
      {
        path: "/creator-manage/artworks",
        element: <CreatorProduct />,
      },
      {
        path: "/creator-manage/room",
        element: <RoomChat />,
        children: [
          {
            path: "/creator-manage/room/:id",
            element: <ChatDetail />,
          },
        ],
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
      {
        path: "/creator-manage/wallet",
        element: <WalletPage />,
      },
      {
        path: "/creator-manage/orders",
        element: <OrderHistory />,
      },
      {
        path: "/creator-manage/orderDetail/:id",
        element: <ViewOrderDetail />,
      },
      {
        path: "/creator-manage/likedShots",
        element: <LikedShots />,
      },
      {
        path: "/creator-manage/purchase-history",
        element: <PurchaseHistory />,
      },
    ],
  },
  {
    path: "/artworkDetails/:id",
    element: (
      <div>
        <Header />
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
        path: "/aiPage",
        element: (
          <ProtectedRouteAuth>
            <AIPage />
          </ProtectedRouteAuth>
        ),
      },

      {
        path: "/jobs",
        element: <JobsPage />,
      },

      {
        path: "/buyPosts",
        element: (
          <ProtectedRouteAuth>
            <OptionUpgrate />
          </ProtectedRouteAuth>
        ),
      },
      {
        path: "/go-pro",
        element: (
          <ProtectedRouteAuth>
            <GoPro />
          </ProtectedRouteAuth>
        ),
      },
      {
        path: "/report-history",
        element: (
          <ProtectedRouteAuth>
            <ReportHistory />
          </ProtectedRouteAuth>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/search?",
        element: <SearchResult />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRouteAuth>
            <AudienceProfile />,{" "}
          </ProtectedRouteAuth>
        ),
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
            path: "/profile/wallet",
            element: <WalletPage />,
          },
          {
            path: "/profile/purchase-history",
            element: <PurchaseHistory />,
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
