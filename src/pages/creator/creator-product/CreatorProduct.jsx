import DropdownTop from "../../../component/dropdown-top/DropDownTop";
import "./CreatorProduct.scss";

import CreatorWorkart from "../../../sections/creatorWorkart/CreatorWorkart";
import { useStateValue } from "../../../Context/StateProvider";
import ImgPreview from "../../Image/Image";
import { Button } from "antd";
import CreatorProfile from "../creator-profile/CreatorProfile";
import Filter from "../../../component/dropdown/Filter";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/counterSlice";
import Workart from "../../../component/workart/Workart";
import WorkartInfo from "../../../component/workartInfo/WorkartInfo";
import WorkartMedia from "../../../component/workartMedia/WorkartMedia";

function CreatorProduct() {
  const { theme } = useStateValue();
  const user = useSelector(selectUser);
  console.log(user);
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
          <CreatorWorkart list={user.artworks} />
        </div>
      </div>
    </div>
  );
}

export default CreatorProduct;
