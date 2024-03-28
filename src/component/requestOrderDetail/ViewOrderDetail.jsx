import React, { useEffect, useRef, useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button, Form, Input, Modal, Popconfirm } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { ExclamationCircleTwoTone, LeftCircleTwoTone } from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import UploadDemo from "../uploadDemo/UploadDemo";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import ImgPreview from "../../pages/Image/Image";
import RoundedBtn from "../rounded-button/RoundedButton";
import TextArea from "antd/es/input/TextArea";
import ImageGallery from "react-image-gallery";
import ReactImageGallery from "react-image-gallery";
function ViewOrderDetail({ choice }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [newData, setNewData] = useState({});
  const { id } = useParams();
  const [demoRequest, setDemoRequest] = useState([]);
  const user = useSelector(selectUser);
  const scrollRef = useRef(null); // Tham chiếu đến phần tử cần cuộn đến
  const [modal2Open, setModal2Open] = useState(false);
  const [reason, setReason] = useState("");
  const [check, setCheck] = useState("");

  const closeModal = () => {
    setModal2Open(false);
  };
  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const elementHeight = element.clientHeight;
      window.scrollTo({
        top: element.offsetTop - window.innerHeight / 2 + elementHeight / 2,
        behavior: "smooth",
      });
    }
  }, [data]);

  const createRoom = async () => {
    try {
      const res = await api.post("/chat", {
        members: [data.creator.id, user.id],
      });
      console.log(res.data);
      user.role === "CREATOR"
        ? navigate(`/creator-manage/room/${res.data.roomID}`)
        : navigate(`/room-messages/${res.data.roomID}`);
    } catch (err) {
      alertFail(err);
    }
  };
  const confirm = async () => {
    try {
      const res = await api.put("/rejectOrderRequest-audience", {
        id: id,
        status: "Reject",
        reasonRejectAudience: reason,
      });
      console.log(res);
      setNewData(res.data.data);
      // setChangeSection(res.data.data);
      console.log(res.data.data);
      fetchData();
      setModal2Open(false);
      alertSuccess("Reject successfully");
    } catch (e) {
      // alertFail("Failed to load");
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [newData]);
  const fetchData = async () => {
    try {
      const response = await api.get(`/getOrderRequestDetail/${id}`);
      setData(response.data.data);
      setDemoRequest(response.data.data.demoRequests);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const acpOrder = async () => {
    try {
      const res = await api.put("/updateOrderRequest-audience", {
        id: data.id,
        status: "PROCESSING",
      });
      setNewData(res.data.data);
      alertSuccess("Acp order successfully ");
    } catch (e) {
      alertFail("Please purchase more", e.response.data);
    }
  };

  return (
    <>
      {data != null ? (
        <div
          ref={scrollRef}
          className={`view-order-detail animate__animated  animate__backInDown  ${
            choice ? "view" : ""
          }`}
          style={{ height: "auto" }}
        >
          <LeftCircleTwoTone
            twoToneColor="#b42d81"
            style={{
              marginBottom: "2em",
              transform: "translateY(2em) translateX(1.5em)",
              fontSize: "1.4em",
            }}
            onClick={() =>
              user?.role == "CREATOR"
                ? navigate("/creator-manage/orders")
                : navigate("/profile/orders")
            }
          />
          <div className="view-order-detail__head">
            <div className="view-order-detail__head__title">{data.title}</div>
            <div className="view-order-detail__head__deadline">
              Deadline Response: {data.dateEnd}
            </div>
          </div>
          <div className="view-order-detail__detail in-progress">
            <div className="view-order-detail__detail__creator">
              {data.status == "GLOBAL" ? (
                <span>{data.dateStart}</span>
              ) : (
                <div className="view-order-detail__detail__creator__right">
                  <Avatar
                    src={data.creator?.avt}
                    className="view-order-detail__detail__creator__right__avatar"
                  />
                  <div className="view-order-detail__detail__creator__right__info">
                    <h3>{data.creator?.name}</h3>
                    <span>{data.dateStart}</span>
                  </div>
                </div>
              )}
              <div
                className="view-order-detail__detail__creator__left"
                onClick={createRoom}
              >
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
            <h3
              style={{ marginTop: "20px" }}
              className="view-order-detail__detail__view"
            >
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
            {data.status == "PENDING" || data.status == "GLOBAL" ? (
              <div className="view-order-detail__detail__confirm">
                <Modal
                  title="Are you sure to cancel this job oppoturnity?"
                  centered
                  open={modal2Open}
                  onCancel={() => setModal2Open(false)}
                  footer={null}
                >
                  <TextArea
                    onChange={(e) => setReason(e.target.value)}
                    showCount
                    maxLength={100}
                    placeholder="Please give us the reason"
                    style={{
                      margin: "1em",
                      transform: "translateX(-1em)",
                      height: 200,
                      resize: "none",
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Please input!",
                      },
                    ]}
                  />
                  <Popconfirm
                    title="Cancel the offer"
                    description="Are you sure to cancel this offer?"
                    onConfirm={confirm}
                    onCancel={closeModal}
                    okText="Yes"
                    cancelText="No"
                  >
                    <RoundedBtn color="#3c3c3c" style={{ width: "100%" }}>
                      Submit
                    </RoundedBtn>
                  </Popconfirm>
                </Modal>
                <Button
                  onClick={() => setModal2Open(true)}
                  className="view-order-detail__detail__confirm__cancel"
                >
                  Cancel Offer
                </Button>
              </div>
            ) : data.status !== "ACTIVE" ? (
              ""
            ) : (
              <div className="view-order-detail__detail__confirm">
                <Button
                  onClick={() => setModal2Open(true)}
                  className="view-order-detail__detail__confirm__cancel"
                >
                  Cancel Offer
                </Button>
                {/* <Button
                  onClick={acpOrder}
                  className="view-order-detail__detail__confirm__accept"
                >
                  Accept Offer
                </Button> */}
                <Popconfirm
                  title="Confirm approve offer"
                  description="If you accept, you will have to deposit 100% for this offer!"
                  onConfirm={acpOrder}
                  onCancel={closeModal}
                  okText="Yes"
                  cancelText="No"
                >
                  {/* <RoundedBtn color="#3c3c3c" style={{ width: "100%" }}>
                      Submit
                    </RoundedBtn> */}
                  <Button
                    // onClick={acpOrder}
                    className="view-order-detail__detail__confirm__accept"
                  >
                    Accept Offer
                  </Button>
                </Popconfirm>
              </div>
            )}

            {data.status === "DONE" ? (
              <div className="request-order-detail__upload-demo__content__right">
                <div
                  style={{ marginTop: "30px" }}
                  className="request-order-detail__detail__description"
                >
                  <h3>Message: </h3>
                  <p>
                    {newData
                      ? newData.productMessage
                        ? newData.productMessage
                        : "There is no message!"
                      : "There is no message!"}
                  </p>
                </div>
                <div
                  style={{ marginTop: "30px" }}
                  className="request-order-detail__detail__description"
                >
                  <h3>Result: </h3>
                </div>
                <div className="request-order-detail__upload-demo__upload">
                  <ImgPreview
                    src={data.productImage}
                    width="50%"
                    height="50%"
                    style={{
                      margin: "1em 0",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ) : (
              ""
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
                <div className="request-order-detail__upload-demo__upload">
                  <ReactImageGallery items={demoRequest} />
                  {demoRequest.map((item) => {
                    return (
                      <>
                        <ImgPreview
                          src={item.image}
                          width="16em"
                          height="16em"
                          style={{
                            borderRadius: "25px",
                            padding: "1em",
                            objectFit: "cover",
                          }}
                        />
                      </>
                    );
                  })}
                </div>
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
