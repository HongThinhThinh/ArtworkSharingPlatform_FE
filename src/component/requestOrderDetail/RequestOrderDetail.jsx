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
import api from "../../config/axios";
import { getDifTime } from "../../assets/hook/useGetTime";
import { alertFail } from "../../assets/hook/useNotification";

function RequestOrderDetail({ choice, setChoice, data }) {
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
        // api send deny
        // fetchData();
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
  const onChange = (value) => {
    console.log("changed", value);
    setInputValue(value);
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
            defaultValue={inputValue}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ margin: "1em 0" }}
            onChange={onChange}
          />
          <input type="number" onInput={(e) => setInputValue(e.target.value)} />
          <h3>Deadline</h3>
          <ConfigProvider locale={globalBuddhistLocale}>
            <Space direction="vertical">
              <DatePicker
                defaultValue={defaultValue}
                showTime
                onChange={(date, dateString) => setDeadline(date, dateString)}
                style={{ margin: "1em 0" }}
              />
            </Space>
          </ConfigProvider>
        </div>
      ),
      onOk() {
        fetchData();
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
