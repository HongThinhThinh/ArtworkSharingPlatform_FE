import React, { useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { ExclamationCircleTwoTone, LeftCircleTwoTone } from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import UploadDemo from "../uploadDemo/UploadDemo";
import ImgPreview from "../../pages/Image/Image";
import DemoWithComment from "../demoWithComment/DemoWithComment";

function InProgressOrderDetail({ choice, setChoice }) {
  const [listDemo, setListDemo] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 785 });
  return (
    <div className={`request-order-detail ${choice != -1 ? "active" : ""}`}>
      {isMobile ? (
        <LeftCircleTwoTone
          twoToneColor="#b42d81"
          style={{
            transform: "translateY(2em) translateX(1.5em)",
            fontSize: "1.4em",
          }}
          onClick={() => setChoice(-1)}
        />
      ) : null}
      <div className="request-order-detail__head">
        <div className="request-order-detail__head__title">
          Title: Logo for brand
        </div>
        <div className="request-order-detail__head__deadline">
          Deadline: 30/4/2023
        </div>
      </div>
      <div className="request-order-detail__detail in-progress">
        <div className="request-order-detail__detail__creator">
          <div className="request-order-detail__detail__creator__right">
            <Avatar
              src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
              className="request-order-detail__detail__creator__right__avatar"
            />
            <div className="request-order-detail__detail__creator__right__info">
              <h3>Dennis Salvatier - tanoshiboy</h3>
              <span>Member since January 2, 2024</span>
            </div>
          </div>
          <div className="request-order-detail__detail__creator__left">
            <AiFillMessage />
          </div>
        </div>
        <CustomeSteps />
        <div className="request-order-detail__detail__payment">
          <h3>Payment:</h3>
          <h3>45 $</h3>
        </div>
        <div className="request-order-detail__detail__description">
          <h3>Job Description: </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est
            ipsum. Aliquam a ante dui.{" "}
          </p>
        </div>
      </div>
      <div className="request-order-detail__upload-demo">
        <div className="request-order-detail__upload-demo__content">
          <h3>Upload Demo:</h3>
          <p>
            <ExclamationCircleTwoTone twoToneColor="#B42D81" /> Please add at
            least <strong>ONE</strong> demo during “Processing” progress for
            moving to the next steps
          </p>
        </div>
        <div className="request-order-detail__upload-demo__upload">
          <UploadDemo />
          <DemoWithComment imageUrl="https://cdn.dribbble.com/userupload/13051915/file/original-da459e012420f125b7a1089a404ad185.png?resize=400x300&vertical=center" />
          <DemoWithComment imageUrl="https://cdn.dribbble.com/userupload/8915426/file/original-a31d3c9d2ed7e66c62fa3ace7d7413c8.jpg?resize=400x300&vertical=center" />
          <DemoWithComment imageUrl="https://cdn.dribbble.com/userupload/4475106/file/original-2a7a23385ae7f4ccc3c0863566362404.png?resize=400x300&vertical=center" />
          <DemoWithComment imageUrl="https://cdn.dribbble.com/userupload/13274862/file/original-c7e83e91bc8b40659b0eeb3d1e25ec41.png?resize=400x300&vertical=center" />

          {listDemo.map((url) => (
            <img src={url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InProgressOrderDetail;
