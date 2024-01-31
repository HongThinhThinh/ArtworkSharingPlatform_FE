import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import "./CreatorProduct.scss";

import CreatorWorkart from "../../../sections/creatorWorkart/CreatorWorkart";
import { useStateValue } from "../../../Context/StateProvider";

function CreatorProduct() {
  const {theme} = useStateValue();
  return (
    <div className="listArtWork" style={{backgroundColor: theme ?"#202020":"#fff",color: theme?"#fff":"#202020"}}>
      <DropdownTop />
      <div className="listArtWork--items">
        <CreatorWorkart />
        <CreatorWorkart />
      </div>
    </div>
  );
}

export default CreatorProduct;
