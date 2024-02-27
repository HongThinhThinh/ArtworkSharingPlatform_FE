import React, { useEffect, useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button, Form, InputNumber, Modal } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { ExclamationCircleFilled, LeftCircleTwoTone } from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import TextArea from "antd/es/input/TextArea";
import { ConfigProvider, DatePicker, Space, Typography } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import RoundedBtn from "../rounded-button/RoundedButton";
import { getDifTime } from "../../assets/hook/useGetTime";
import api from "../../config/axios";
import { alertSuccess } from "../../assets/hook/useNotification";
import moment from "moment";

function RequestOrderDetail({ choice, setChoice, data, setData }) {
  const [reason, setReason] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 785 });
  const [newData, setNewData] = useState(data);
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
    setNewData(data);
  }, [data]);

  const onFinish = async (fieldsValue) => {
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      date: fieldsValue["date"].format("MMMM Do YYYY, h:mm:ss a"),
    };

    try {
      const res = await api.put("/updateOrderRequest-creator", {
        id: data.id,
        dateEnd: values.date,
        price: values.number,
      });
      setNewData(res.data.data);
      setData(res.data.data);
      alertSuccess("Please waiting for audience acept");
    } catch (e) {
      console.log(e);
    }
    setModal2Open(false);
  };


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
        <div className="request-order-detail__head__title">{newData.title}</div>
        {newData.status !== "PENDING" ? (
          <div className="request-order-detail__head__deadline">
            Deadline: {newData.dateEnd}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="request-order-detail__detail">
        <div className="request-order-detail__detail__creator">
          <div className="request-order-detail__detail__creator__right">
            <Avatar
              src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
              className="request-order-detail__detail__creator__right__avatar"
            />
            <div className="request-order-detail__detail__creator__right__info">
              <h3>{newData.audience.name}</h3>
              <span>{getDifTime(newData.dateStart)}</span>
            </div>
          </div>
          <div className="request-order-detail__detail__creator__left">
            <AiFillMessage />
          </div>
        </div>
        <CustomeSteps state={newData.status} />
        {newData.status != "PENDING" ? (
          <div
            style={{ marginBottom: "-15px" }}
            className="request-order-detail__detail__payment"
          >
            <h3>Payment:</h3>
            <h3>{newData.price}</h3>
          </div>
        ) : (
          ""
        )}
        <div
          style={{ marginTop: "30px" }}
          className="request-order-detail__detail__description"
        >
          <h3>Job Description: </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est
            ipsum. Aliquam a ante dui.{" "}
          </p>
        </div>
        {newData.status == "PENDING" ? (
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
                onChange={(e) => setReason(e)}
                showCount
                maxLength={100}
                placeholder="Please give us the reason"
                style={{
                  margin: "1em",
                  transform: "translateX(-1em)",
                  height: 200,
                  resize: "none",
                }}
              />
              <RoundedBtn
                color="#3c3c3c"
                style={{ width: "100%" }}
                onClick={() => alert(reason)}
              >
                Submit
              </RoundedBtn>
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
                <div style={{ fontFamily: "MediumCereal", marginTop: "1em" }}>
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
                      <InputNumber />
                    </Form.Item>
                    <span className="ant-form-text" style={{ marginLeft: 8 }}>
                      $
                    </span>
                  </Form.Item>

                  <Form.Item
                    name="date"
                    label="DatePicker[showTime]"
                    {...config}
                  >
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                  </Form.Item>
                </div>
                <Form.Item>
                  <RoundedBtn color="#3c3c3c" style={{ width: "100%" }}>
                    Submit
                  </RoundedBtn>
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

      </div>
    </div>
  );
}

export default RequestOrderDetail;
