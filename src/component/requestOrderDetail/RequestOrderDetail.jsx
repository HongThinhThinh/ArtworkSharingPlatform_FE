import React, { useEffect } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button, InputNumber, Modal } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { LeftCircleTwoTone } from "@ant-design/icons";
import api from "../../config/axios";

function RequestOrderDetail({ choice, setChoice }) {
  const isMobile = useMediaQuery({ maxWidth: 785 });
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("/getOrderRequest-creator");
      console.log(data.data.data);
    };
    fetchData();
  }, []);
import { ExclamationCircleFilled, LeftCircleTwoTone } from "@ant-design/icons";
import CustomeSteps from "../steps/CustomeSteps";
import TextArea from "antd/es/input/TextArea";
import { ConfigProvider, DatePicker, Space, Typography } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";

function RequestOrderDetail({ choice, setChoice }) {
  const isMobile = useMediaQuery({ maxWidth: 785 });
  const { confirm } = Modal;
  const showCancel = () => {
    confirm({
      title: "Are you sure to cancel this job oppoturnity?",
      icon: <ExclamationCircleFilled />,
      content: (
        <TextArea
          showCount
          maxLength={100}
          placeholder="Please give us the reason"
          style={{
            margin: "1em 0em 2em 0",
            transform: "translateX(-1em)",
            height: 200,
            resize: "none",
          }}
        />
      ),
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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
  const defaultValue = dayjs("2024-01-01");
  const showAccept = () => {
    confirm({
      title: "Please give us your expect salary and deadline for this order?",
      icon: <ExclamationCircleFilled />,
      content: (
        <div style={{ fontFamily: "MediumCereal", marginTop: "1em" }}>
          <h3>Payment</h3>
          <InputNumber
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
                defaultValue={defaultValue}
                showTime
                style={{ margin: "1em 0" }}
              />
            </Space>
          </ConfigProvider>
        </div>
      ),
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
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
        <div className="request-order-detail__head__title">
          Title: Logo for brand
        </div>
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
        <div className="request-order-detail__detail__confirm">
          <Button
            className="request-order-detail__detail__confirm__cancel"
            onClick={showCancel}
          >
            Cancel Offer
          </Button>
          <Button
            className="request-order-detail__detail__confirm__accept"
            onClick={showAccept}
          >
            Accept Offer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RequestOrderDetail;
