import React, { useState } from "react";
import "./RequestOrder.scss";
import RequestOrderDetail from "../../component/RequestOrderDetail/RequestOrderDetail";
import RequestOrderList from "../../component/requestOrderList/RequestOrderList";
import InProgressOrderDetail from "../../component/requestOrderDetail/InProgressOrderDetail";

function RequestOrder() {
  const [choice, setChoice] = useState(-1);
  return (
    <div className="requestOrder">
      <RequestOrderList choice={choice} setChoice={setChoice} />
      <RequestOrderDetail choice={choice} setChoice={setChoice} />
      {/* <InProgressOrderDetail choice={choice} setChoice={setChoice} /> */}
    </div>
  );
}

export default RequestOrder;
