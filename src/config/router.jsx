import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
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
]);
