import React from "react";
import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import WorkartMedia from "../../../component/workartMedia/WorkartMedia";
import "./CreatorProduct.scss";
import WorkartInfo from "../../../component/workartInfo/WorkartInfo";
import WorkartSection from "../../../sections/workartSection/WorkartSection";
import CreatorWorkart from "../../../sections/creatorWorkart/CreatorWorkart";

function CreatorProduct() {
  return (
    <div className="listArtWork">
      <DropdownTop />
      <div className="listArtWork--items">
        <CreatorWorkart />
      </div>
    </div>
  );
}

export default CreatorProduct;
