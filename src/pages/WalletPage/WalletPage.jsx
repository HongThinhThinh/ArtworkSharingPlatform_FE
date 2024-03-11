import React, { useState } from "react";
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

const { Meta } = Card;
function WalletPage() {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(1);

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = () => {
    console.log(number);
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
          description="1020$"
        />
        <div
          style={{ marginTop: "20px", display: "flex", gap: "20px" }}
          className="btnPay"
        >
          <div onClick={() => setOpen(true)}>
            <ButtonPlan />
          </div>
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
                  Submit
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
