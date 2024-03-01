import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import "./OrderHistory.scss";
import Order from "../../component/order/Order";
import ViewOrderDetail from "../../component/requestOrderDetail/ViewOrderDetail";
import api from "../../config/axios";
import { alertFail } from "../../assets/hook/useNotification";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/loading/Loading";

function OrderHistory() {
  const [check, setCheck] = useState([]);
  const [state, setState] = useState(true);

  useEffect(() => {
    const isLoading = setTimeout(() => setState(false), 500);
    return () => clearTimeout(isLoading);
  }, []);
  return (
    <>
      <div className="order-history">
        {!state && check.length != 0 ? (
          <>
            <h1>Order History</h1>
            <p>
              Check the status of recent orders, manage , and discover similar
              products.
            </p>
          </>
        ) : null}
        {state && <Loading />}
      </div>

      <Order check={check} setCheck={setCheck} />
    </>
  );
}

export default OrderHistory;
