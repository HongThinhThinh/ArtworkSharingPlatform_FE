import { Outlet } from "react-router-dom";
import LayoutLeft from "../../../component/layout-creator/Layoutleft";
import "./CreatorManage.scss";

function CreatorManage() {
  return (
    <div className="creatorManage">
      <div className="creatorManage--left">
        <LayoutLeft />
      </div>
      <div className="creatorManage--right">
        <Outlet />
      </div>
    </div>
  );
}

export default CreatorManage;
