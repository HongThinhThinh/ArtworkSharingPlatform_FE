import React from "react";
import whiteLogo from "../../assets/Cremo-white.svg";
import "./Checkout.scss";
import { Avatar, Form, Button, Input, Space, Row, Col } from "antd";

function Checkout() {
  const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState(false);

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
  const [form] = Form.useForm();
  return (
    <div className="checkout">
      <div className="checkout__information">
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
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h2>Payment</h2>
          <Form.Item
            name="card-number"
            label="Card Number"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name-on-card"
            label="Name On Card"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Row>
            <Col lg={16}>
              <Form.Item
                name="ex-date"
                label="Expiration date (MM/YY)"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={1}></Col>
            <Col lg={7}>
              <Form.Item
                name="cvc"
                label="CVC"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
              <SubmitButton form={form} className="submit">
                Submit
              </SubmitButton>
              <Button htmlType="reset" className="cancel">
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className="checkout__order-detail">
        <img src={whiteLogo} className="checkout__order-detail__logo" />
        <h1>Your Order</h1>
        <div className="checkout__order-detail__box">
          <div className="checkout__order-detail__box__top">
            <div className="checkout__order-detail__box__top__right">
              <Avatar
                src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
                className="checkout__order-detail__box__top__right__avatar"
              />
              <h3>Nicolas Heron</h3>
            </div>
            <div className="checkout__order-detail__box__top__left">
              Deadline: 30/4/2023
            </div>
          </div>
          <div className="checkout__order-detail__box__bottom">
            <h2>
              Title: <span>Logo for brand</span>
            </h2>
            <h3>Job Description:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non
              est ipsum. Aliquam a ante dui.{" "}
            </p>
          </div>
        </div>
        <div className="checkout__order-detail__subtotal">
          <span>Subtotal</span>
          <span>20$</span>
        </div>
        <div className="checkout__order-detail__commission">
          <span>Commission</span>
          <span>2$</span>
        </div>
        <div className="checkout__order-detail__total">
          <span>Total</span>
          <span>22$</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
