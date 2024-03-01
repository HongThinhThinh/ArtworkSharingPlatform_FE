import React from "react";
import "./RequestOrderTab.scss";
function RequestOrderTab({ title, time, content, status, onClick }) {
  return (
    <div
      className={`request-order-tab ${status ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="request-order-tab__head">
        <h3 className="request-order-tab__head__title">{title}</h3>
        <h3 className="request-order-tab__head__time">{time}</h3>
      </div>
      <p className="request-order-tab__content">{content}</p>
    </div>
  );
}

export default RequestOrderTab;
