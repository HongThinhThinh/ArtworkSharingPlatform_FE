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
  LeftCircleTwoTone,
  SettingOutlined,
} from "@ant-design/icons";
import card from "../../assets/CardGroup.png";

import { Avatar, Card } from "antd";
import RoundedBtn from "../../component/rounded-button/RoundedButton";
import axios from "axios";
import api from "../../config/axios";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { alertSuccess } from "../../assets/hook/useNotification";
import TransactionHistory from "../../component/transaction-history/TransactionHistory";

const { Meta } = Card;
function WalletPage() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [check, setCheck] = useState(false);
  const [wallet, setWallet] = useState({});
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    if (balance <= (wallet?.balance == 0 ? 0 : wallet?.balance) - 1) {
      const id = setInterval(() => {
        setBalance(balance + 1);
      }, 0.5);
      return () => {
        clearInterval(id);
      };
    }
  });

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
  console.log(user);
  return (
    <div className="wallet-section-wrapper">
      {user?.role == "CREATOR" ? (
        <div className="your-wallet-head">
          <Link to="/creator-manage/artworks">
            <LeftCircleTwoTone
              twoToneColor="#BBBBBB"
              style={{
                fontSize: "1.8em",
                cursor: "pointer",
              }}
            />
          </Link>
          <h1>Your Wallet</h1>
        </div>
      ) : null}

      <div className="wallet-section">
        <div className="wallet-section__left">
          <img src={card} alt="card-group" />
        </div>
        <div className="wallet-section__right">
          <div className="wallet-section__right__top">
            <h2>Current Balance</h2>
            <h3>{balance}$</h3>
          </div>
          <div
            className="wallet-section__right__bottom"
            onClick={() => setOpen(true)}
          >
            <ButtonPlan content="Deposit more money with Paypal" />
          </div>
        </div>
      </div>
      <TransactionHistory transaction="transactionsById"/>
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
  );
}

export default WalletPage;
