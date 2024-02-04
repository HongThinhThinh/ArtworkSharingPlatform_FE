import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import "./CreatorProduct.scss";

import CreatorWorkart from "../../../sections/creatorWorkart/CreatorWorkart";
import { useStateValue } from "../../../Context/StateProvider";
import ImgPreview from "../../Image/Image";
import { Button } from "antd";
import CreatorProfile from "../creator-profile/CreatorProfile";

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
        <DropdownTop />
        <div className="listArtWork--items">
          <CreatorWorkart />
          <CreatorWorkart />
        </div>
      </div>
    </div>
  );
}

export default CreatorProduct;
