import { Outlet } from "react-router-dom";
import LayoutLeft from "../../../component/layout-creator/Layoutleft";
import "./CreatorManage.scss";
import Header from "../../../component/header/Header";

function CreatorManage() {
  return (
    <div className="creatorManage">
      <div className="creatorManage--left">
        <LayoutLeft />
      </div>
      <div className="creatorManage--right">
        <div className="creatorManage--right__header">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default CreatorManage;
