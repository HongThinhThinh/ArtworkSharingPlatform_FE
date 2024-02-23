import { Button, Form, Input, Modal, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import "./FormRequest.scss";
import { WarningFilled } from "@ant-design/icons";

function FormRequest({ status, setStatus }) {
  const [option, setOption] = useState("");



  return (
    <div className="form">
      <Modal
        open={status}
        onOk={setStatus}
        onCancel={setStatus}
        title={
          <div className="form__header">
            <img src="https://cdn.dribbble.com/userupload/13160510/file/original-57ed6d83e8919f069a08973b01db421d.jpg?resize=1200x496&vertical=center" />
            <h4>Let's get your request ready to send</h4>
          </div>
        }
        centered
        footer={[
          <div className="form__footer">
            <div className="form__footer__upper">
              <h4 onClick={setStatus}>Nevermind</h4>
              <Button
                className="form__footer__upper__button"
                
              >
                Send Request
              </Button>
            </div>
            <div className="form__footer__lower">
              <p>10 messages remaining this month</p>
            </div>
          </div>,
        ]}
        className="form__container"
      >
        <div className="form__container__details">
          <Form.Item
            // label="What are your looking to design..."
            name="question1"
            maxLength={80}
            showCount
            className="form__container__details__label"
            rules={[
              {
                required: true,
                message: (
                  <div>
                    <WarningFilled /> Please input your question!
                  </div>
                ),
              },
            ]}
          >
            <p> What are your looking to design...</p>
            <Input
              placeholder="e.g. landing page, iOS icon"
              maxLength={80}
              showCount
              className="form__container__details__input"
            />
          </Form.Item>

          <Form.Item
            // label="How urgent is your request"
            name="question2"
            className="form__container__details__label"
          >
            <p>How urgent is your request?</p>
            <div className="form__container__details__option">
              <Button
                className="form__container__details__option__button"
                onClick={() => setOption("question1")}
                style={{
                  backgroundColor: option === "question1" ? "black" : "",
                  color: option === "question1" ? "white" : "",
                }}
              >
                ASAP
              </Button>

              <Button
                className="form__container__details__option__button"
                onClick={() => setOption("question2")}
                style={{
                  backgroundColor: option === "question2" ? "black" : "",
                  color: option === "question2" ? "white" : "",
                }}
              >
                Within the next month
              </Button>
              <Button
                className="form__container__details__option__button"
                onClick={() => setOption("question3")}
                style={{
                  backgroundColor: option === "question3" ? "black" : "",
                  color: option === "question3" ? "white" : "",
                }}
              >
                No urgent
              </Button>
            </div>
          </Form.Item>

          <Form.Item
            // label="Tell us more about the project"
            name="question3"
            className="form__container__details__label"
            style={{ fontSize: "2em" }}
          >
            <p>
              Tell us more about the project{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
            <TextArea
              rows={8}
              placeholder="Looking to add another landing page to my current Webflow site..."
              className="form__container__details__input"
            />
          </Form.Item>
        </div>
      </Modal>
    </div>
  );
}

export default FormRequest;
