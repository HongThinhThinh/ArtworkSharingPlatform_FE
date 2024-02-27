import { Collapse } from "antd";
import React, { useState } from "react";
import "./OrderHistory.scss";
import Order from "../../component/order/Order";
import ViewOrderDetail from "../../component/requestOrderDetail/ViewOrderDetail";

function OrderHistory() {
  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <>
      {isShowDetail ? (
        <div className="order-history__wrapper">
          <ViewOrderDetail choice={isShowDetail} setChoice={setIsShowDetail} />
        </div>
      ) : (
        <div className="order-history">
          <h1>Order History</h1>
          <p>
            Check the status of recent orders, manage , and discover similar
            products.
          </p>
          <Order setShow={setIsShowDetail} />
        </div>
      )}
    </>
  );
}

export default OrderHistory;
