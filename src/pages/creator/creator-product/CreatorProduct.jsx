import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import "./CreatorProduct.scss";

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
