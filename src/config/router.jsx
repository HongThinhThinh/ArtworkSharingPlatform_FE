import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import { increment } from "../redux/features/counterSlice";
import { useEffect } from "react";
import api from "./axios";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

const PriveRoute = () => {
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get(`/test2`).then((res) => {
      console.log(res);
      console.log(res);
    });
  }, [count]);
  return (
    <div>
      <h1>
        <Outlet />
      </h1>
      <Link to="/">Home</Link>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    ),
    // outlet sẽ show thằng con của nó
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
