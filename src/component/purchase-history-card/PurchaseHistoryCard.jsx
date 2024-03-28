import React from "react";
import ImgPreview from "../../pages/Image/Image";
import { Button } from "antd";
import "./PurchaseHistoryCard.scss";

function PurchaseHistoryCard({ src, date, description, title }) {
  const convert = () => {
    var transactionDate = date;
    var year = transactionDate.substring(0, 4);
    var month = transactionDate.substring(4, 6) - 1; // Month in JavaScript Date object is 0-indexed
    var day = transactionDate.substring(6, 8);
    var hour = transactionDate.substring(8, 10);
    var minute = transactionDate.substring(10, 12);
    var second = transactionDate.substring(12, 14);

    var newDate = new Date(year, month, day, hour, minute, second).toDateString();
    return newDate;
  };
  return (
    <div className="purchase-hi-card">
      <div className="purchase-hi-card__left">
        <h1>Title: {title}</h1>
        <h3>Purchased date: {convert()}</h3>
        <p>
          <strong>Description:</strong> {description}.
        </p>
        <Button>Download Artwork</Button>
      </div>
      <div className="purchase-hi-card__right">
        <ImgPreview
          style={{ height: "300px", borderRadius: "10px" }}
          width="380px"
          src={src}
        />
      </div>
    </div>
  );
}

export default PurchaseHistoryCard;
