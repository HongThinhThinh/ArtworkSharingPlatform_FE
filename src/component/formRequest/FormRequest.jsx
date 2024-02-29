import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import "./FormRequest.scss";
import { WarningFilled } from "@ant-design/icons";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import { getCurrentDateTime } from "../../assets/hook/useGetTime";
import { useParams } from "react-router-dom";

function FormRequest({ status, setStatus }) {
  const { id } = useParams();
  const [option, setOption] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // console.log(id);
  const onFinish = async () => {
    console.log("sadsklnlllllllnlnlnlnlnlnlnln");
    try {
      const response = await api.post("/sendOrderRequest", {
        userID: id,
        title: title,
        dateStart: getCurrentDateTime(),
        dateEnd: option,
        description: description,
        price: 0,
      });
      console.log(response.data.data);
      alertSuccess("Send request successfully");
      setStatus(false);
      setTitle("");
      setDescription("");
    } catch (e) {
      alertFail(e.message);
      console.log("sadsklnlllllllnlnlnlnlnlnlnln");
    }
  };
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
                onClick={onFinish}
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
              onInput={(e) => setTitle(e.target.value)}
              placeholder="e.g. landing page, iOS icon"
              maxLength={80}
              showCount
              value={title}
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
                onClick={() => setOption("ASAP")}
                style={{
                  backgroundColor: option === "ASAP" ? "black" : "",
                  color: option === "ASAP" ? "white" : "",
                }}
              >
                ASAP
              </Button>

              <Button
                className="form__container__details__option__button"
                onClick={() => setOption("Within the next month")}
                style={{
                  backgroundColor:
                    option === "Within the next month" ? "black" : "",
                  color: option === "Within the next month" ? "white" : "",
                }}
              >
                Within the next month
              </Button>
              <Button
                className="form__container__details__option__button"
                onClick={() => setOption("No urgent")}
                style={{
                  backgroundColor: option === "No urgent" ? "black" : "",
                  color: option === "No urgent" ? "white" : "",
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
              value={description}
              onInput={(e) => setDescription(e.target.value)}
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
