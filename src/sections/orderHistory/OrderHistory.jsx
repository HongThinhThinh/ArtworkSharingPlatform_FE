import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import "./OrderHistory.scss";
import Order from "../../component/order/Order";
import ViewOrderDetail from "../../component/requestOrderDetail/ViewOrderDetail";
import api from "../../config/axios";
import { alertFail } from "../../assets/hook/useNotification";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../component/loading/Loading";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { LeftCircleTwoTone } from "@ant-design/icons";

function OrderHistory() {
  const [selectedValue, setSelectedValue] = useState("ALL");
  const [check, setCheck] = useState([]);
  const [state, setState] = useState(true);
  const user = useSelector(selectUser);

  const setupColor = {
    All: "#D9C6EC",
    Pending: "#E9D153",
    InProgress: "#81BED9",
    Deny: "#DB3063",
    Done: "#70D374",
  };

  useEffect(() => {
    const isLoading = setTimeout(() => setState(false), 500);
    return () => clearTimeout(isLoading);
  }, []);
  return (
    <div className="order-history-wrapper">
      {user?.role == "CREATOR" ? (
        <Link to="/creator-manage/artworks">
          <LeftCircleTwoTone
            twoToneColor="#BBBBBB"
            style={{
              fontSize: "1.8em",
              cursor: "pointer",
              margin: "0 0 1em 0",
            }}
          />
        </Link>
      ) : null}
      {state && <Loading />}
      <div className="order-audience">
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
        </div>
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
            console.log(e.target.value);
          }}
          style={{
            backgroundColor: ` ${
              selectedValue == "ALL"
                ? setupColor.All
                : selectedValue == "PENDING"
                ? setupColor.Pending
                : selectedValue == "PROCESSING"
                ? setupColor.InProgress
                : selectedValue == "REJECT"
                ? setupColor.Deny
                : setupColor.Done
            }`,
          }}
          className="order-audience__select-order"
        >
          <option value="ALL">ALL</option>
          <option value="PENDING">PENDING</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="PROCESSING">IN PROCESSING</option>
          <option value="REJECT">REJECT</option>
          <option value="DONE">DONE</option>
        </select>
      </div>

      <Order check={check} setCheck={setCheck} filter={selectedValue} />
    </div>
  );
}

export default OrderHistory;
