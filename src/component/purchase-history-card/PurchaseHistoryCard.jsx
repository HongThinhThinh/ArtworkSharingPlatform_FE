import React from "react";
import ImgPreview from "../../pages/Image/Image";
import { Button } from "antd";
import "./PurchaseHistoryCard.scss";

function PurchaseHistoryCard({ src, date, description, title }) {
  return (
    <div className="purchase-hi-card">
      <div className="purchase-hi-card__left">
        <h1>Title: {title}</h1>
        <h3>Purchased date: {date}</h3>
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
