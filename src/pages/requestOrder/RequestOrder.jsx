import React, { useEffect, useState } from "react";
import "./RequestOrder.scss";
import RequestOrderList from "../../component/requestOrderList/RequestOrderList";
import InProgressOrderDetail from "../../component/requestOrderDetail/InProgressOrderDetail";
import api from "../../config/axios";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useStateValue } from "../../Context/StateProvider";
import moment from "moment";

function RequestOrder() {
  const isActive = useLocation().pathname == "/creator-manage/requestOrder";
  const [choice, setChoice] = useState(-1);
  const isMobile = useMediaQuery({ maxWidth: 785 });
  const [list, setList] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [data, setData] = useState({});
  const { theme, changeSection, setDemo } = useStateValue();
  const [filter, setFilter] = useState("Offer");


  useEffect(() => {
    fetchData();

    // getFilter();
  }, [filter]);

  const fetchData = async () => {
    try {
      const response = await api.get("/getAllOrderRequestCreator");
      let fetchedData = response.data.data;
     
      fetchedData.sort((a, b) => {
        const dateA = moment(a.dateStart, "MMMM Do YYYY, h:mm:ss a");
        const dateB = moment(b.dateStart, "MMMM Do YYYY, h:mm:ss a");
        return dateB.diff(dateA); // So sánh và sắp xếp theo thứ tự giảm dần
      });
      setList(fetchedData);
      setListFilter(
        response.data.data.filter((item) =>
          getFilter(filter).includes(item.status)
        )
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getFilter = (status) => {
    console.log(list);
    if (status === "Request") {
      return ["PENDING"];
    } else if (status == "Pending") {
      return ["ACTIVE"];
    } else if (status == "In Progress") {
      return ["PROCESSING"];
    } else if (status == "History") {
      return ["DONE", "REJECT"];
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme ? "#202020" : "",
        color: theme ? "#fff" : "",
      }}
      className={`requestOrder ${isMobile && isActive ? "active" : ""}`}
    >
      <>
        <RequestOrderList
          setData={setData}
          setFilter={setFilter}
          list={listFilter}
          choice={choice}
          setChoice={setChoice}
        />
        <Outlet context={fetchData} />
      </>
    </div>
  );
}

export default RequestOrder;
