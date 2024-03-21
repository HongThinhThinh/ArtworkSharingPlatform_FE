import React, { useEffect, useState } from "react";
import "./JobsView.scss";
import { Button, Card } from "antd";
import Tag from "../tags/Tag";
import RoundedBtn from "../rounded-button/RoundedButton";
import api from "../../config/axios";
import { getDifTime } from "../../assets/hook/useGetTime";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { Form, useNavigate } from "react-router-dom";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import { useMediaQuery } from "react-responsive";

function JobsView({ data }) {
  const data1 = ["web", "mobile", "animation"];
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  const tags = data1.map((tag) => {
    return { tag };
  });
  const user = useSelector(selectUser);

  const onFinish = async (e) => {
    if (user != null) {
      if (user?.role === "AUDIENCE") navigate("/go-pro");
      else {
        try {
          const response = await api.put("/updateOrderRequestGlobal", {
            id: e,
          });
          navigate(`/creator-manage/requestOrder/requestOrderDetail/${e}`);
          alertSuccess("Approve this job successfully");
        } catch (error) {
          alertFail(error.response.data);
          // console.log(error);
        }
      }
    } else {
      alertFail("Please login first");
      navigate("/login");
    }
  };

  return (
    <div className="jobsview">
      <Card
        className="jobsview__cart"
        bordered={false}
        style={
          isMobile
            ? {
                height: "auto",
              }
            : { height: "360px" }
        }
      >
        <h1>{data.title}</h1>
        <div className="jobsview__cart__info">
          <img src={data.audience.avt} />
          <p>Posted {getDifTime(data.dateStart)}</p>
        </div>
        <div className="jobsview__cart__info-details">
          <p>${data.price}</p>
          <p>Deadline: {data.dateEnd}</p>
        </div>
        <div className="jobsview__cart__description">
          <p>{data.description}</p>
        </div>
        <div style={{ display: "flex", marginTop: "1em" }}>
          {data1.map((tag) => {
            return <Button className="jobsview__cart__tag">{tag}</Button>;
          })}
        </div>

        {user?.id != data?.audience?.id ? (
          <Button
            className="jobsview__cart__submit"
            htmlType="submit"
            onClick={() => onFinish(data.id)}
          >
            Approve
          </Button>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
}

export default JobsView;
