import React from "react";
import whiteLogo from "../../assets/Cremo-white.svg";
import "./PrintBill.scss";
import { Avatar, Form, Button, Input, Space, Row, Col } from "antd";
import ImgPreview from "../Image/Image";

function PrintBill() {
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
    <div className="print-bill">
    
      <div className="print-bill__order-detail">
        <div className="print-bill__order-detail__right">
          <h1>Your Order</h1>

          <div className="print-bill__order-detail__right__box">
            <div className="print-bill__order-detail__right__box__top">
              <div className="print-bill__order-detail__right__box__top__right">
                <Avatar
                  src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
                  className="print-bill__order-detail__right__box__top__right__avatar"
                />
                <h3>Nicolas Heron</h3>
              </div>
            </div>
            <div className="print-bill__order-detail__right__box__bottom">
              <h2>
                Title: <span>Logo for brand</span>
              </h2>
              <ImgPreview
                src="https://cdn.dribbble.com/userupload/12910687/file/original-7063b9ddf1ce9fe3fbebdf04aa95a05f.png?resize=450x338&vertical=center"
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

          {/* <Form.Item>
            <Space>
              <SubmitButton form={form} className="submit">
                Submit
              </SubmitButton>
          
            </Space>
          </Form.Item> */}
        </Form>
      </div>
          <div className="print-bill__order-detail__left__subtotal">
            <span>Subtotal</span>
            <span>20$</span>
          </div>
          <div className="print-bill__order-detail__left__commission">
            <span>Commission</span>
            <span>2$</span>
          </div>
          <div className="print-bill__order-detail__left__total">
            <span>Total</span>
            <span>22$</span>
          </div>
          <SubmitButton form={form} className="submit">
                Checkout
         </SubmitButton>
        
        </div>
        
      </div>
    </div>
  );
}

export default PrintBill;
