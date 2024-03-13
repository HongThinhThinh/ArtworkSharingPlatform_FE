import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Input,
  Modal,
  Row,
  Statistic,
  Form,
  InputNumber,
} from "antd";
import ButtonPlan from "../../component/buttonPlan/ButtonPlan";
import "./WalletPage.scss";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Avatar, Card } from "antd";
import RoundedBtn from "../../component/rounded-button/RoundedButton";
import axios from "axios";
import api from "../../config/axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { alertSuccess } from "../../assets/hook/useNotification";

const { Meta } = Card;
function WalletPage() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [check, setCheck] = useState(false);
  const [wallet, setWallet] = useState({});

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  console.log(id);
  const user = useSelector(selectUser);

  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancel2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    if (id) {
      recharge();
    }
  }, [id]);

  useEffect(() => {
    getWalletDetail();
  }, []);

  const onFinish = async () => {
    setCheck(true);
    try {
      const res = await api.post("/request-recharge-paypal", {
        amount: number,
      });
      console.log(res.data.data);
      window.location.href = res.data.data;
    } catch (e) {
      console.log(e);
    }
    setCheck(false);
  };
  const recharge = async () => {
    try {
      const res = await api.put(`/recharge/${id}`, {});
      setWallet(res.data.data);
      alertSuccess("Recharge Successfully");
    } catch (e) {
      console.log(e.response.data == "Reload");
    }
  };
  const getWalletDetail = async () => {
    try {
      const res = await api.get(`/walletDetail/${user?.id}`, {});
      console.log(res.data.data);
      setWallet(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const vnPayhandler = async () => {
    try {
      const res = await api.post("request-recharge-vnpay", {
        amount: number2,
      });
      console.log(res.data.data);
      window.location.href = res.data.data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="walletPage">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://cdn.dribbble.com/userupload/10907941/file/original-21a052d76d57ad11db8ef1feb285a1a7.png?resize=1200x900"
          />
        }
      >
        <Meta
          avatar={
            <Avatar src="https://banner2.cleanpng.com/20191114/ygp/transparent-cash-icon-money-icon-business-and-trade-icon-5dcde2c791aea7.9075525915737740235967.jpg" />
          }
          title="Your balance "
          description={wallet?.balance == 0 ? "0 $" : `${wallet?.balance} $`}
        />
        <div
          style={{ marginTop: "20px", display: "flex", gap: "20px" }}
          className="btnPay"
        >
          <div onClick={() => setOpen(true)}>
            <ButtonPlan content="paypal" />
          </div>
          <div onClick={() => setOpen2(true)}>
            <ButtonPlan content="vnpay" />
          </div>

          <Modal open={open2} onCancel={handleCancel2} footer={null}>
            <Form onFinish={vnPayhandler}>
              <div style={{ fontFamily: "MediumCereal", marginBottom: "-2em" }}>
                <Form.Item name="amount">
                  <h3
                    style={{
                      fontFamily: "MediumCereal",
                      marginBottom: "1.2em",
                    }}
                  >
                    Amount of money
                  </h3>
                  <Form.Item
                    name="amount"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input!",
                      },
                    ]}
                  >
                    <InputNumber
                      addonBefore="+"
                      addonAfter="$"
                      defaultValue={number2}
                      onChange={(e) => setNumber2(e)}
                    />
                  </Form.Item>
                </Form.Item>
              </div>
              <Form.Item>
                <RoundedBtn
                  color="#2C547F"
                  style={{ width: "100%", transform: "translateY(1em)" }}
                  htmlType="submit"
                >
                  {check == true ? "Loading" : "Submit"}
                </RoundedBtn>
              </Form.Item>
            </Form>
          </Modal>
          <Modal open={open} onCancel={handleCancel} footer={null}>
            <Form onFinish={onFinish}>
              <div style={{ fontFamily: "MediumCereal", marginBottom: "-2em" }}>
                <Form.Item name="amount">
                  <h3
                    style={{
                      fontFamily: "MediumCereal",
                      marginBottom: "1.2em",
                    }}
                  >
                    Amount of money
                  </h3>
                  <Form.Item
                    name="amount"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input!",
                      },
                    ]}
                  >
                    <InputNumber
                      addonBefore="+"
                      addonAfter="$"
                      defaultValue={number}
                      onChange={(e) => setNumber(e)}
                    />
                  </Form.Item>
                </Form.Item>
              </div>
              <Form.Item>
                <RoundedBtn
                  color="#2C547F"
                  style={{ width: "100%", transform: "translateY(1em)" }}
                  htmlType="submit"
                >
                  {check == true ? "Loading..." : "Submit"}
                </RoundedBtn>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </Card>
    </div>
  );
}

export default WalletPage;
