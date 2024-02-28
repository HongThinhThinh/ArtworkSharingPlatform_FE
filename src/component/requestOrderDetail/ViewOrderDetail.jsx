import React, { useEffect, useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { ExclamationCircleTwoTone, LeftCircleTwoTone } from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import UploadDemo from "../uploadDemo/UploadDemo";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../config/axios";

function ViewOrderDetail({ choice }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getOrderRequestDetail/${id}`);
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data != null ? (
        <div className={`request-order-detail ${choice ? "view" : ""}`}>
          <LeftCircleTwoTone
            twoToneColor="#b42d81"
            style={{
              transform: "translateY(2em) translateX(1.5em)",
              fontSize: "1.4em",
            }}
            onClick={() => navigate("/profile/orders")}
          />
          <div className="request-order-detail__head">
            <div className="request-order-detail__head__title">
              {data.title}
            </div>
            <div className="request-order-detail__head__deadline">
              Deadline Response: 30/4/2023
            </div>
          </div>
          <div className="request-order-detail__detail in-progress">
            <div className="request-order-detail__detail__creator">
              <div className="request-order-detail__detail__creator__right">
                <Avatar
                  src={data.creator.avt}
                  className="request-order-detail__detail__creator__right__avatar"
                />
                <div className="request-order-detail__detail__creator__right__info">
                  <h3>{data.creator.name}</h3>
                  <span>Member since January 2, 2024</span>
                </div>
              </div>
              <div className="request-order-detail__detail__creator__left">
                <AiFillMessage />
              </div>
            </div>
            <CustomeSteps />
            <h3 className="request-order-detail__detail__request">
              {data.description}
            </h3>
            <div className="request-order-detail__detail__payment">
              <h3>Payment:</h3>
              <h3>45 $</h3>
            </div>
            <div className="request-order-detail__detail__description">
              <h3>Deadline </h3>
              <p>30/05/2024</p>
            </div>
            <div className="request-order-detail__detail__confirm">
              <Button className="request-order-detail__detail__confirm__cancel">
                Cancel Offer
              </Button>
              <Button className="request-order-detail__detail__confirm__accept">
                Accept Offer
              </Button>
            </div>
          </div>

          <div className="request-order-detail__demo">
            <div className="request-order-detail__demo__content">
              <h3>Demo:</h3>
              <p>
                <ExclamationCircleTwoTone twoToneColor="#B42D81" /> These are
                some demo of your order which are uploaded by creator
              </p>
            </div>
            <div className="request-order-detail__demo__upload">
              <img
                src="https://cdn.dribbble.com/userupload/4475107/file/original-dbbcfc1e3b317d4fb8c0dd061d26fde7.png?resize=1200x900"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ViewOrderDetail;
