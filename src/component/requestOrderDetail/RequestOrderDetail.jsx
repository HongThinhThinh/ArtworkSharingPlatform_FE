import { useEffect, useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button, Form, InputNumber, Modal, Popconfirm } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import {
  CheckCircleTwoTone,
  ExclamationCircleFilled,
  ExclamationCircleTwoTone,
  LeftCircleTwoTone,
  SendOutlined,
} from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import TextArea from "antd/es/input/TextArea";
import { ConfigProvider, DatePicker } from "antd";
import RoundedBtn from "../rounded-button/RoundedButton";
import { getDifTime } from "../../assets/hook/useGetTime";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import UploadDemo from "../uploadDemo/UploadDemo";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ImgPreview from "../../pages/Image/Image";
import image1 from "../../assets/CremoBackground.png";
import UploadArtWork from "../UploadArtWork/UploadArtWork";
import uploadFile from "../../assets/hook/useUpload";

function RequestOrderDetail() {
  const isActive = useLocation().pathname == "/creator-manage/requestOrder";
  const { id } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audience, setAudience] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const confirm = (e) => {
    if (reason.trim().length == 0) {
      alertFail("Please give us a reason for this!", "Fail to Cancel");
    } else {
      cancelOrder();
    }
  };
  const cancel = (e) => {
    setModal1Open(false);
  };
  const handleSendProduct = async () => {
    console.log(URL);
    console.log(description);
    try {
      const response = await api.post("/sendProduct", {
        id: id,
        userID: audience.id,
        productImage: URL,
        productMessage: description,
      });
      setNewData(response.data.data);
      alertSuccess("Send Product Successfully");
      console.log(response.data.data);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      alertFail(error.response.data);
    }
  };
  const [URL, setURL] = useState(image1);
  // const [imageUploaded, setImageUploaded] = useState(false);
  const [description, setDescription] = useState(false);
  const getLink = async (file) => {
    let URL = `https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif`;
    setURL(URL);
    URL = await uploadFile(file);
    setURL(URL);
    setImageUploaded(true);
    console.log(URL);
  };
  const isMobile = useMediaQuery({ maxWidth: 785 });
  const [newData, setNewData] = useState();

  const cancelOrder = async () => {
    try {
      const res = await api.put("/updateOrderRequest-creator", {
        id: id,
        status: "Reject",
        reasonRejectCreator: reason,
      });
      console.log(res);
      setNewData(res.data.data);
      setModal1Open(false);
      alertSuccess("Reject successfully");
    } catch (e) {
      // alertFail("Failed to load");
      console.log(e);
    }
  };
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getOrderRequestDetail/${id}`);
        setAudience(response.data.data.audience);
        setNewData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const onFinish = async (fieldsValue) => {
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      date: fieldsValue["date"].format("MMMM Do YYYY, h:mm:ss a"),
    };

    try {
      const res = await api.put("/updateOrderRequest-creator", {
        id: newData.id,
        dateEnd: values.date,
        price: values.number,
        status: "ACTIVE",
      });
      setNewData(res.data.data);
      // setData(res.data.data);
      alertSuccess("Please waiting for audience acept");
    } catch (e) {
      console.log(e);
    }
    setModal2Open(false);
  };
  console.log(newData);
  return (
    <>
      {newData && (
        <div className={`request-order-detail ${isActive ? "active" : ""}`}>
          {isMobile ? (
            <LeftCircleTwoTone
              twoToneColor="#b42d81"
              style={{
                transform: "translateX(1.5em)",
                margin: "2em 0",
                marginBottom: "4em",
                fontSize: "1.4em",
                zIndex: 10,
              }}
              onClick={() => {
                navigate("/creator-manage/requestOrder");
              }}
            />
          ) : null}
          <div className="request-order-detail__head">
            <div className="request-order-detail__head__title">
              {newData?.title}
            </div>
            {newData?.status !== "PENDING" ? (
              <div className="request-order-detail__head__deadline">
                Deadline: {newData?.dateEnd}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="request-order-detail__detail">
            <div className="request-order-detail__detail__creator">
              <div className="request-order-detail__detail__creator__right">
                <Avatar
                  src={newData?.audience?.avt}
                  className="request-order-detail__detail__creator__right__avatar"
                />
                <div className="request-order-detail__detail__creator__right__info">
                  <h3>{newData?.audience?.name}</h3>
                  <span>{getDifTime(newData?.dateStart)}</span>
                </div>
              </div>
              <div className="request-order-detail__detail__creator__left">
                <AiFillMessage />
              </div>
            </div>
            <CustomeSteps
              state={
                newData?.status === "REJECT"
                  ? newData.reasonRejectCreator
                    ? "REJECTCREATOR"
                    : "REJECTAUDIENCE"
                  : newData?.status
              }
              reason={
                newData.reasonRejectCreator || newData.reasonRejectAudience
              }
            />

            {newData.status != "PENDING" ? (
              newData.reasonRejectCreator ? (
                ""
              ) : (
                <>
                  <div
                    // style={{ marginBottom: "-20px" }}
                    className="request-order-detail__detail__payment"
                  >
                    <h3>Payment:</h3>
                    <h3>{newData.price} $</h3>
                  </div>
                </>
              )
            ) : (
              ""
            )}
            <div
              style={{ marginTop: "30px" }}
              className="request-order-detail__detail__description"
            >
              <h3>Job Description: </h3>
              <p>{newData?.description}</p>
            </div>
            {newData?.status == "PENDING" ? (
              <div className="request-order-detail__detail__confirm">
                <Button
                  className="request-order-detail__detail__confirm__cancel"
                  onClick={() => setModal1Open(true)}
                >
                  Cancel Offer
                </Button>
                <Modal
                  title="Are you sure to cancel this job oppoturnity?"
                  centered
                  open={modal1Open}
                  onCancel={() => setModal1Open(false)}
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
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <RoundedBtn color="#3c3c3c" style={{ width: "100%" }}>
                      Submit
                    </RoundedBtn>
                  </Popconfirm>
                </Modal>

                <Button
                  className="request-order-detail__detail__confirm__accept"
                  onClick={() => setModal2Open(true)}
                >
                  Accept Offer
                </Button>
                <Modal
                  title="Please give us your expect salary and deadline for this order?"
                  centered
                  open={modal2Open}
                  onCancel={() => setModal2Open(false)}
                  footer={null}
                >
                  <Form onFinish={onFinish}>
                    <div
                      style={{ fontFamily: "MediumCereal", marginTop: "1em" }}
                    >
                      <Form.Item label="Price">
                        <Form.Item
                          name="number"
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: "Please input!",
                            },
                          ]}
                        >
                          <InputNumber min={1} />
                        </Form.Item>
                        <span
                          className="ant-form-text"
                          style={{ marginLeft: 8 }}
                        >
                          $
                        </span>
                      </Form.Item>

                      <Form.Item name="date" label="Deadline" {...config}>
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                      </Form.Item>
                    </div>
                    <Form.Item>
                      <RoundedBtn color="#3c3c3c" style={{ width: "100%" }}>
                        Submit
                      </RoundedBtn>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            ) : (
              ""
            )}

            {newData.status === "PROCESSING" ? (
              <>
                <div className="request-order-detail__upload-demo">
                  <div className="request-order-detail__upload-demo__content">
                    <div className="request-order-detail__upload-demo__content__left">
                      <h3>Upload Demo:</h3>
                      <p>
                        <ExclamationCircleTwoTone twoToneColor="#B42D81" />{" "}
                        Please add at least <strong>ONE</strong> demo during
                        “Processing” progress
                      </p>
                    </div>
                    <div className="request-order-detail__upload-demo__content__right">
                      <Modal
                        title={
                          <h1 style={{ fontFamily: "MediumCereal" }}>
                            Send Complete Result
                          </h1>
                        }
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleCancel}
                        className="completeModal"
                      >
                        <ImgPreview
                          src={URL}
                          width="100%"
                          height="100%"
                          style={{
                            margin: "1em 0",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          onChange={(e) => {
                            getLink(e.target.files[0]);
                          }}
                        >
                          <UploadArtWork content="Upload new Artwork" />
                        </div>
                        <TextArea
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Let's send your customers a thank you note!"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                          style={{ margin: "1em 0" }}
                        />
                        <Button
                          onClick={handleSendProduct}
                          style={{
                            backgroundColor: "#3c3c3c",
                            color: "white",
                            fontFamily: "MediumCereal",
                            height: "3.5em",
                            width: "100%",
                          }}
                        >
                          Send Result
                        </Button>
                      </Modal>
                      <button className="confirm" onClick={showModal}>
                        <CheckCircleTwoTone twoToneColor="#5CB154" /> Confirm to
                        complete
                      </button>
                    </div>
                  </div>
                  <div className="request-order-detail__upload-demo__upload">
                    <UploadDemo />
                  </div>
                  <Button className="send">
                    Send <SendOutlined />
                  </Button>
                </div>
              </>
            ) : newData.status === "DONE" ? (
              <div className="request-order-detail__upload-demo__content__right">
                <div
                  style={{ marginTop: "30px" }}
                  className="request-order-detail__detail__description"
                >
                  <h3>Message: </h3>
                  <p>{newData ? newData.productMessage : null}</p>
                </div>
                <div className="request-order-detail__upload-demo__upload">
                  <ImgPreview
                    src={newData.productImage}
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
        </div>
      )}
    </>
  );
}

export default RequestOrderDetail;
