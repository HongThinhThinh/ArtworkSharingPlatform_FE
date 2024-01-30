import { Outlet } from "react-router-dom";
import LayoutLeft from "../../../component/layout-creator/Layoutleft";
import "./CreatorManage.scss";
function CreatorManage() {
  return (
    <div className="creatorManage">
      <LayoutLeft />
      <Outlet />
    </div>
  );
}

export default CreatorManage;
