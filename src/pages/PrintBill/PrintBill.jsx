import React, { useEffect, useState } from "react";
import whiteLogo from "../../assets/Cremo-white.svg";
import "./PrintBill.scss";
import {
  Avatar,
  Form,
  Button,
  Input,
  Space,
  Row,
  Col,
  Modal,
  Popconfirm,
} from "antd";
import ImgPreview from "../Image/Image";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import api from "../../config/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";

function PrintBill() {
  const SubmitButton = ({ form, children }) => {
    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
  };
  const [submittable, setSubmittable] = React.useState(false);
  const location = useLocation();
  const searchParams = new location.search();
  const id = searchParams.get("idArtwork");
  const idTransaction = searchParams.get("transactionId");
  const [data, setData] = useState({});
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await api.get(`/artwork-detail/${id}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching artwork details:", error);
    }
  };
  const handleCheckout = async () => {
    try {
      const res = await api.post(`/checkOut/${idTransaction}`);
      alertSuccess("Buy artwork successfully, please check your mail");
      navigate("/profile/wallet");
    } catch (error) {
      alertFail(error.response.data);
    }
  };
  const handleOk = async () => {
    await handleCheckout();
  };

  const showPopconfirm = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const [form] = Form.useForm();
  return (
    <div className="print-bill">
      <div className="print-bill__order-detail">
        <div className="print-bill__order-detail__right">
          {/* <h1>Your Order</h1> */}

          <div className="print-bill__order-detail__right__box">
            <div className="print-bill__order-detail__right__box__top">
              <div className="print-bill__order-detail__right__box__top__right">
                <Avatar
                  src={data?.user?.avt}
                  className="print-bill__order-detail__right__box__top__right__avatar"
                />
                <h3>{data?.user?.name}</h3>
              </div>
            </div>
            <div className="print-bill__order-detail__right__box__bottom">
              <h2>
                Title: <span>{data?.title}</span>
              </h2>
              <ImgPreview
                src={data?.image}
                width="100%"
                height="100%"
                style={{
                  margin: "1em 0",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="print-bill__order-detail__left">
          <div className="print-bill__order-detail__left__information">
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
            >
              <h2>Information</h2>
              <Form.Item
                name="name"
                label="Name"
                initialValue={user?.name}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input readOnly />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                initialValue={user?.email}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input readOnly />
              </Form.Item>

              {/* <Form.Item>
            <Space>
              <SubmitButton form={form} className="submit">
                Submit
              </SubmitButton>
          
            </Space>
          </Form.Item> */}
            </Form>
          </div>
          {/* <div className="print-bill__order-detail__left__subtotal">
              <span>Subtotal</span>
              <span>20$</span>
            </div>
            <div className="print-bill__order-detail__left__commission">
              <span>Commission</span>
              <span>2$</span>
            </div> */}
          <div className="print-bill__order-detail__left__total">
            <span>Total</span>
            <span>{data.price}$</span>
          </div>
          <SubmitButton form={form} className="submit">
            <div onClick={showPopconfirm}>Checkout</div>
          </SubmitButton>
        </div>
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Pop confirmation"
      >
        Are you sure to buy this artwork with {data?.price} $ ?
      </Modal>
    </div>
  );
}

export default PrintBill;
