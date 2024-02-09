import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import "./CreatorProduct.scss";

import CreatorWorkart from "../../../sections/creatorWorkart/CreatorWorkart";
import { useStateValue } from "../../../Context/StateProvider";
import ImgPreview from "../../Image/Image";
import { Button } from "antd";
import CreatorProfile from "../creator-profile/CreatorProfile";
import Filter from "../../../component/dropdown/Filter";

function CreatorProduct() {
  const { theme } = useStateValue();
  return (
    <div
      className="creator-product"
      style={{
        backgroundColor: theme ? "#202020" : "#fff",
        color: theme ? "#fff" : "#202020",
      }}
    >
      <CreatorProfile />
      <div className="listArtWork">
        <div className="list-drop">
          <span className="DropDownTop--span">Artwork</span>
          <div className="filter">
            <DropdownTop />
            <Filter />
          </div>
        </div>
        <div className="listArtWork--items">
          <CreatorWorkart />
          <CreatorWorkart />
        </div>
      </div>
    </div>
  );
}

export default CreatorProduct;
