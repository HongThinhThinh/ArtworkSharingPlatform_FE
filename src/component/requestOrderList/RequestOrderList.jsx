import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./RequestOrderList.scss";
import { Button } from "antd";
import RequestOrderTab from "../requestOrderTab/RequestOrderTab";
import { list } from "firebase/storage";
import moment from "moment";
import { getDifTime } from "../../assets/hook/useGetTime";
import { useNavigate, useParams } from "react-router-dom";

function RequestOrderList({ choice, setChoice, list, setData }) {
  const [filter, setFilter] = useState("Offer");
  const { id } = useParams();
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  const listOption = ["Offer", "Pending", "My Jobs", "History"];
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    if (filter == "Offer") {
      setNewList(list.filter((item) => item.status == "PENDING"));
    } else if (filter == "Pending") {
      setNewList(list.filter((item) => item.status == "ACTIVE"));
    } else if (filter == "My Jobs") {
      setNewList(list.filter((item) => item.status == "PROCESSING"));
    } else if (filter == "History") {
      setNewList(
        list.filter(
          (item) =>
            item.status == "REJECTCREATOR" ||
            item.status == "REJECTCREATOR" ||
            item.status == "DONE"
        )
      );
    }
  }, [filter]);

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
            onClick={() => {
              setOption(index);
              setFilter(item);
            }}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="requestOrderList__tabs">
        {newList.length > 0 ? (
          newList.map((item, index) => {
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
          })
        ) : (
          <p style={{ textAlign: "center", fontFamily: "MediumCereal" }}>
            It's empty!
          </p>
        )}
      </div>
    </div>
  );
}

export default RequestOrderList;
