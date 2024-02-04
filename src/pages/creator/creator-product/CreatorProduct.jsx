import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import "./CreatorProduct.scss";

import CreatorWorkart from "../../../sections/creatorWorkart/CreatorWorkart";
import { useStateValue } from "../../../Context/StateProvider";
import ImgPreview from "../../Image/Image";

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
      <div className="creator-profilee">
        <div className="creator-profilee__img">
          <ImgPreview src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/401376601_1295831231127942_4331203260278541816_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=khBll3vYxFIAX9Q_Sqm&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCLjg8Kp9kB-Iu1OKCxr2x-7mWiGQtL9nHf8OgoPEkhGA&oe=65C3D350" />
        </div>
      </div>

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
