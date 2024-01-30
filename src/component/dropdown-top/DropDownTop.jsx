import DropDown from "../dropdown/DropDown";
import "./DropDownTop.scss";
function DropdownTop() {
  return (
    <div>
      <div className="DropDownTop">
        <span className="DropDownTop--span">Artwork</span>
        <DropDown />
      </div>
    </div>
  );
}

export default DropdownTop;
