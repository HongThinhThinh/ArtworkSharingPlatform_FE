import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./RequestOrderList.scss";
import { Button } from "antd";
import RequestOrderTab from "../requestOrderTab/RequestOrderTab";
import { list } from "firebase/storage";
import moment from "moment";
import { getDifTime } from "../../assets/hook/useGetTime";

function RequestOrderList({ choice, setChoice, list }) {
  const [option, setOption] = useState(0);
  const listOption = ["Offer", "My Jobs", "History"];

  const listOrder = [
    {
      title: "Order an webpage design",
      time: "12 hours",
      content:
        "Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. ",
    },
    {
      title: "Logo for Brand",
      time: "11 hours",
      content:
        "Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. ",
    },
    {
      title: "Responsive webpage for mobile",
      time: "10 hours",
      content:
        "Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est ipsum. Aliquam a ante dui. ",
    },
  ];
  return (
    <div className={`requestOrderList ${choice != -1 ? "" : "active"}`}>
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
      {list.map((item, index) => {
        console.log(item.dateStart);

        return (
          <RequestOrderTab
            onClick={() => {
              setChoice(index);
              setData(item);
            }}
            key={index}
            title={item.title}
            time={getDifTime(item.dateStart)}
            content={item.description}
            status={index === choice}
          />
        );
      })}
    </div>
  );
}

export default RequestOrderList;
