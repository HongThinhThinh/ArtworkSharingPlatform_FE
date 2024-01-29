import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

import CreatorPage from "../pages/creator/CreatorPage";
import CreatorWorkart from "../sections/creatorWorkart/CreatorWorkart";
import CreatorCollection from "../sections/creatorCollection/CreatorCollection";

import Test from "../test";

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
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    // outlet sẽ show thằng con của nó
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
    // outlet sẽ show thằng con của nó
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
