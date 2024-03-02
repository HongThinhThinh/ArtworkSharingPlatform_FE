import React, { useEffect, useState } from "react";
import "./Order.scss";
import { Avatar, Button } from "antd";
import { alertFail } from "../../assets/hook/useNotification";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";

function Order({ check, setCheck, filter }) {
  const [newData, setNewData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("/getAllOrderRequestAudience");
        console.log(res.data.data);
        setData(res.data.data);

        if (filter != "ALL") {
          setNewData(res.data.data.filter((item) => item.status == filter));
        } else {
          setNewData(res.data.data);
        }
        setCheck(res.data.data);
      } catch (e) {
        // alertFail("Fail to load");
      }
    };

    fetch();
  }, [filter]);

  return (
    <>
      {newData.length > 0 ? (
        newData.map((item) =>
          item.status == filter || filter == "ALL" ? (
            <div className="order" key={item.id}>
              <div className="order__top">
                <div className="order__top__right">
                  <div className="order__top__right__order-id">
                    <h3>Order Number</h3>
                    <p>{item.id}</p>
                  </div>
                  <div className="order__top__right__date-placed">
                    <h3>Date Placed</h3>
                    <p>{item.dateStart}</p>
                  </div>
                  {item.status != "PENDING" ? (
                    <div className="order__top__right__total">
                      <h3>Total Amount</h3>
                      <p>{item.price}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="order__top__left">{item.status}</div>
              </div>
              <div className="order__detail">
                <div className="order__detail__creator">
                  <Avatar
                    src={item.creator?.avt}
                    className="order__detail__creator__avatar"
                  />
                  <div className="order__detail__creator__info">
                    <h3>{item.creator?.name}</h3>
                  </div>
                </div>
                <h3 className="order__detail__title">{item.title}</h3>
                <p className="order__detail__title">{item.description}</p>
              </div>
              <div className="order__view">
                <Button
                  className="order__view__btn"
                  onClick={() => {
                    navigate(`/profile/orderDetail/${item.id}`);
                  }}
                >
                  View Detail
                </Button>
              </div>
            </div>
          ) : null
        )
      ) : (
        <p>You don't have any order with this type of filter</p>
      )}
    </>
  );
}

export default Order;
