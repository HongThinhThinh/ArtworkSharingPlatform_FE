import React, { useEffect, useState } from "react";
import "./RequestOrder.scss";
import RequestOrderDetail from "../../component/RequestOrderDetail/RequestOrderDetail";
import RequestOrderList from "../../component/requestOrderList/RequestOrderList";
import InProgressOrderDetail from "../../component/requestOrderDetail/InProgressOrderDetail";
import api from "../../config/axios";

function RequestOrder() {
  const [choice, setChoice] = useState(-1);
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
    <div className="requestOrder">
      <>
        <RequestOrderList
          setData={setData}
          list={list}
          choice={choice}
          setChoice={setChoice}
        />
        {choice == -1 ? (
          ""
        ) : (
          <RequestOrderDetail
            data={data}
            setData={setData}
            choice={choice}
            setChoice={setChoice}
          />
        )}
        {/* <InProgressOrderDetail choice={choice} setChoice={setChoice} /> */}
      </>
    </div>
  );
}

export default RequestOrder;
