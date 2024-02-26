import React, { useEffect, useState } from "react";
import "./RequestOrder.scss";
import RequestOrderDetail from "../../component/RequestOrderDetail/RequestOrderDetail";
import RequestOrderList from "../../component/requestOrderList/RequestOrderList";
import InProgressOrderDetail from "../../component/requestOrderDetail/InProgressOrderDetail";
import api from "../../config/axios";

function RequestOrder() {
  const [choice, setChoice] = useState(-1);
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("/getOrderRequest-creator");
      setList(data.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="requestOrder">
      <RequestOrderList list={list} choice={choice} setChoice={setChoice} />
      <RequestOrderDetail choice={choice} setChoice={setChoice} />
      {/* <InProgressOrderDetail choice={choice} setChoice={setChoice} /> */}
    </div>
  );
}

export default RequestOrder;
