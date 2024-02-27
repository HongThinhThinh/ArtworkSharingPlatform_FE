import React, { useEffect, useState } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button, InputNumber, Modal } from "antd";
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

function RequestOrderDetail({ choice, setChoice }) {
  const [reason, setReason] = useState("");
  const [payment, setPayment] = useState(1000);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 785 });
  console.log(data);
  const [status, setStatus] = useState();
  const [inputValue, setInputValue] = useState(0);
  const [deadline, setDeadline] = useState("");
  const fetchData = async () => {
    // try {
    //   const res = await api.put("/updateOrderRequest-creator", {
    //     id: data.id,
    //     dateEnd: "string",
    //     price: inputValue,
    //   });
    //   console.log(res);
    // } catch (e) {
    //   alertFail(e);
    // }
    console.log(inputValue);
    console.log(deadline);
  };

  dayjs.extend(buddhistEra);
  const { Title } = Typography;

  // Component level locale
  const buddhistLocale = {
    ...en,
    lang: {
      ...en.lang,
      fieldDateFormat: "BBBB-MM-DD",
      fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
      yearFormat: "BBBB",
      cellYearFormat: "BBBB",
    },
  };

  // ConfigProvider level locale
  const globalBuddhistLocale = {
    ...enUS,
    DatePicker: {
      ...enUS.DatePicker,
      lang: buddhistLocale.lang,
    },
  };
  const onChange = (value) => {
    console.log("changed", value);
    setInputValue(value);
  };
  const defaultValue = dayjs("2024-01-01");
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
        <div className="request-order-detail__head__title">{data.title}</div>
        <div className="request-order-detail__head__deadline">
          Deadline: 30/4/2023
        </div>
      </div>
      <div className="request-order-detail__detail">
        <div className="request-order-detail__detail__creator">
          <div className="request-order-detail__detail__creator__right">
            <Avatar
              src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
              className="request-order-detail__detail__creator__right__avatar"
            />
            <div className="request-order-detail__detail__creator__right__info">
              <h3>{data.audience.name}</h3>
              <span>{getDifTime(data.dateStart)}</span>
            </div>
          </div>
          <div className="request-order-detail__detail__creator__left">
            <AiFillMessage />
          </div>
        </div>
        <CustomeSteps state={status} />
        {status != "PENDING" ? (
          <div
            style={{ marginBottom: "-15px" }}
            className="request-order-detail__detail__payment"
          >
            <h3>Payment:</h3>
            <h3>45 $</h3>
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
            <div style={{ fontFamily: "MediumCereal", marginTop: "1em" }}>
              <h3>Payment</h3>
              <InputNumber
                onChange={(e) => setPayment(e)}
                defaultValue={1000}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                style={{ margin: "1em 0" }}
              />
              <h3>Deadline</h3>
              <ConfigProvider locale={globalBuddhistLocale}>
                <Space direction="vertical">
                  <DatePicker
                    onChange={(e) => setDeadline(e)}
                    defaultValue={defaultValue}
                    showTime
                    style={{ margin: "1em 0" }}
                  />
                </Space>
              </ConfigProvider>
            </div>
            <RoundedBtn
              color="#3c3c3c"
              style={{ width: "100%" }}
              onClick={() => alert(payment + " " + deadline)}
            >
              Submit
            </RoundedBtn>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default RequestOrderDetail;
