import React, { useEffect, useState } from "react";
import "./RequestOrder.scss";
import RequestOrderList from "../../component/requestOrderList/RequestOrderList";
import InProgressOrderDetail from "../../component/requestOrderDetail/InProgressOrderDetail";
import api from "../../config/axios";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useStateValue } from "../../Context/StateProvider";

function RequestOrder() {
  const isActive = useLocation().pathname == "/creator-manage/requestOrder";
  const [choice, setChoice] = useState(-1);
  const isMobile = useMediaQuery({ maxWidth: 785 });
  const [list, setList] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/getAllOrderRequestCreator");
        setList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [data]);
  const { theme } = useStateValue();

  return (
    <div
      style={{
        backgroundColor: theme ? "#202020" : "",
        color: theme ? "#fff" : "",
      }}
      className={`requestOrder ${isMobile && isActive ? "active" : ""}`}
    >
      <>
        <RequestOrderList
          setData={setData}
          list={list}
          choice={choice}
          setChoice={setChoice}
        />
        <Outlet />
      </>
    </div>
  );
}

export default RequestOrder;
