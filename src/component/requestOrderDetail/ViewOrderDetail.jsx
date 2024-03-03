import React, { useEffect, useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { ExclamationCircleTwoTone, LeftCircleTwoTone } from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import UploadDemo from "../uploadDemo/UploadDemo";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";

function ViewOrderDetail({ choice }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [newData, setNewData] = useState({});
  const { id } = useParams();
  const [demoRequest, setDemoRequest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      try {
        const response = await api.get(`/getOrderRequestDetail/${id}`);
        setData(response.data.data);
        setDemoRequest(response.data.data.demoRequests);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [newData]);
  // console.log(data.creator);

  const acpOrder = async () => {
    try {
      const res = await api.put("/updateOrderRequest-audience", {
        id: data.id,
        status: "PROCESSING",
      });
      setNewData(res.data.data);
      alertSuccess("Acp order successfully ");
    } catch (e) {
      // alertFail("Failed to load");
      console.log(e);
    }
  };
  console.log(data);
  return (
    <>
      {data != null ? (
        <div className={`view-order-detail ${choice ? "view" : ""}`}>
          <LeftCircleTwoTone
            twoToneColor="#b42d81"
            style={{
              marginBottom: "2em",
              transform: "translateY(2em) translateX(1.5em)",
              fontSize: "1.4em",
            }}
            onClick={() => navigate("/profile/orders")}
          />
          <div className="view-order-detail__head">
            <div className="view-order-detail__head__title">{data.title}</div>
            <div className="view-order-detail__head__deadline">
              Deadline Response: {data.dateEnd}
            </div>
          </div>
          <div className="view-order-detail__detail in-progress">
            <div className="view-order-detail__detail__creator">
            {data.status == "GLOBAL"?<span>{data.dateStart}</span>:  <div className="view-order-detail__detail__creator__right">
                <Avatar
                  src={data.creator?.avt}
                  className="view-order-detail__detail__creator__right__avatar"
                />
                <div className="view-order-detail__detail__creator__right__info">
                  <h3>{data.creator?.name}</h3>
                  <span>{data.dateStart}</span>
                </div>
              </div>}
              <div className="view-order-detail__detail__creator__left">
                <AiFillMessage />
              </div>
            </div>
            <CustomeSteps
              state={
                data?.status === "REJECT"
                  ? data.reasonRejectCreator
                    ? "REJECTCREATOR"
                    : "REJECTAUDIENCE"
                  : data?.status
              }
              reason={data.reasonRejectCreator || data.reasonRejectAudience}
            />
            <h3 style={{marginTop:"20px"}} className="view-order-detail__detail__view">
              {data.description}
            </h3>

            {data.status != "PENDING" ? (
              data.reasonRejectCreator ? (
                ""
              ) : (
                <>
                  <div
                    // style={{ marginBottom: "-20px" }}
                    className="view-order-detail__detail__payment"
                  >
                    <h3>Payment:</h3>
                    <h3>{data.price} $</h3>
                  </div>
                </>
              )
            ) : (
              ""
            )}
            <div
              style={{ marginTop: "20px" }}
              className="view-order-detail__detail__description"
            >
              <h3>Deadline </h3>
              <p>{data.dateEnd}</p>
            </div>
            {data.status == "PENDING" ? (
              <div className="view-order-detail__detail__confirm">
                <Button className="view-order-detail__detail__confirm__cancel">
                  Cancel Offer
                </Button>
              </div>
            ) : data.status !== "ACTIVE" ? (
              ""
            ) : (
              <div className="view-order-detail__detail__confirm">
                <Button className="view-order-detail__detail__confirm__cancel">
                  Cancel Offer
                </Button>
                <Button
                  onClick={acpOrder}
                  className="view-order-detail__detail__confirm__accept"
                >
                  Accept Offer
                </Button>
              </div>
            )}
          </div>

          <div className="view-order-detail__demo">
            {demoRequest.length == 0 ? (
              ""
            ) : (
              <>
                <div className="view-order-detail__demo__content">
                  <h3>Demo:</h3>
                  <p>
                    <ExclamationCircleTwoTone twoToneColor="#B42D81" /> These
                    are some demo of your order which are uploaded by creator
                  </p>
                </div>

                {demoRequest.map((item) => {
                  return (
                    <>
                      <div className="view-order-detail__demo__upload">
                        <img src={item.image} alt="" />
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ViewOrderDetail;
