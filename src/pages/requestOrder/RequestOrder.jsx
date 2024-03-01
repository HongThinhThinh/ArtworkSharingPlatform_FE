import React, { useEffect, useState } from "react";
import "./RequestOrder.scss";
import RequestOrderList from "../../component/requestOrderList/RequestOrderList";
import api from "../../config/axios";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function RequestOrder() {
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

  return (
    <div className={`requestOrder ${isMobile ? "active" : ""}`}>
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
