import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./RequestOrderList.scss";
import { Button } from "antd";
import RequestOrderTab from "../requestOrderTab/RequestOrderTab";
import { list } from "firebase/storage";
import moment from "moment";
import { getDifTime } from "../../assets/hook/useGetTime";
import { useNavigate, useParams } from "react-router-dom";

function RequestOrderList({ choice, setChoice, list, setData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  const listOption = ["Offer", "My Jobs", "History"];

  return (
    <div className={`requestOrderList ${id ? "" : "active"}`}>
      <div className="requestOrderList__title">
        <h1>Offer</h1>
      </div>

      <div className="requestOrderList__search">
        <div className="icon">
          <HiOutlineSearch />
        </div>
        <input type="text" placeholder="Search..."></input>
      </div>

      <div className="requestOrderList__items">
        {listOption.map((item, index) => (
          <Button
            className={`requestOrderList__items__item ${
              option == index ? "active" : ""
            }`}
            key={index}
            onClick={() => setOption(index)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="requestOrderList__tabs">
        {list.map((item, index) => {
          return (
            <RequestOrderTab
              onClick={() => {
                setData(item);
                setChoice(item.id);
                navigate(
                  `/creator-manage/requestOrder/requestOrderDetail/${item.id}`
                );
              }}
              key={index}
              title={item.title}
              time={getDifTime(item.dateStart)}
              content={item.description}
              status={item.id === choice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RequestOrderList;
