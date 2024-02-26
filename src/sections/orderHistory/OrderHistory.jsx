import { Collapse } from "antd";
import React from "react";
import "./OrderHistory.scss";
import Order from "../../component/order/Order";
import ViewOrderDetail from "../../component/requestOrderDetail/ViewOrderDetail";

function OrderHistory() {
  return (
    <div className="order-history">
      <h1>Order History</h1>
      <p>
        Check the status of recent orders, manage , and discover similar
        products.
      </p>

      <div className="order-history__detail">
        <Order />
      </div>
    </div>
  );
}

export default OrderHistory;
