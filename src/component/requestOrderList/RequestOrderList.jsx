import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./RequestOrderList.scss";

function RequestOrderList() {
  return (
    <div className="requestOrderList">
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
        <div className="requestOrderList__items__item">
            
        </div>

      </div>
    </div>
  );
}

export default RequestOrderList;
