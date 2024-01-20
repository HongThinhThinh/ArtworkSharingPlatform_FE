import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import { increment } from "../redux/features/counterSlice";
import { useEffect } from "react";
import api from "./axios";

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
        <header>header</header>
        <h1>test vps ,set up máy ảo</h1>
        <Outlet />
        <footer>footer</footer>
      </div>
    ),
    // outlet sẽ show thằng con của nó
    children: [
      {
        path: "audience",
        element: <PriveRoute />,
        children: [
          {
            path: "profile",
            element: <h1>audience- profile</h1>,
          },
        ],
      },
      {
        path: "page1",
        element: <h1>Page1- Bao Tran</h1>,
      },
      {
        path: "page2",
        element: <h1>Page2- Nhi</h1>,
      },
      {
        path: "page3",
        element: <h1>Page3-Minh</h1>,
      },
    ],
  },
]);
