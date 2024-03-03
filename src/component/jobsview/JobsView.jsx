import React, { useEffect, useState } from "react";
import "./JobsView.scss";
import { Button, Card } from "antd";
import Tag from "../tags/Tag";
import RoundedBtn from "../rounded-button/RoundedButton";
import api from "../../config/axios";
import { getDifTime } from "../../assets/hook/useGetTime";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
function JobsView({ title, description, price, date, avt, dateEnd}) {
  const data = ["web", "mobile", "animation"];
  const tags = data.map((tag) => {
    return { tag };
  });
  

  return (
    <div className="jobsview">
      <Card className="jobsview__cart" bordered={false}>
        <h1>{title}</h1>
        <div className="jobsview__cart__info">
          <img src={avt} />
          <p>Posted {getDifTime(date)}</p>
        </div>
        <div className="jobsview__cart__info-details">
          <p>${price}</p>
          <p>Deadline: {dateEnd}</p>
        </div>
        <div className="jobsview__cart__description">
          <p>{description}</p>
        </div>
        <div style={{ display: "flex", marginTop: "1em" }}>
          {data.map((tag) => {
            return <Button className="jobsview__cart__tag">{tag}</Button>;
          })}
        </div>

        <Button className="jobsview__cart__submit" >Approve</Button>
      </Card>
    </div>
  );
}

export default JobsView;
