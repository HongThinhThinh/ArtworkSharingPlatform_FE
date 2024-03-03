import React, { useState } from "react";
import "./PostJob.scss";
import { WarningFilled } from "@ant-design/icons";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import { getCurrentDateTime, getDifTime } from "../../assets/hook/useGetTime";
import { useParams } from "react-router-dom";
import { Button, DatePicker, Form, Input, InputNumber, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import Tag from "../tags/Tag";
import { CornerDownLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";

function PostJob({ render, status, setStatus,setRender }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector(selectUser);

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const onFinish = async (e) => {
    const rangeValue = e["range-picker"];
    const rangeTimeValue = e["range-time-picker"];
    const values = {
      ...e,
      date: e["date"].format("MMMM Do YYYY, h:mm:ss a"),
    };

    const newValue = { ...values, tags: selectedTags };
    console.log(newValue);

    try {
      const response = await api.post("/sendOrderRequestGlobal", {
        title: values.title,
        description: values.description,
        price: values.price,
        dateStart: getCurrentDateTime(),
        dateEnd: values.date,
      });
      console.log(values.date);
      setStatus();
      setRender(!render)
      alertSuccess("Post new job successfully");
    } catch (error) {
      alertFail("Post new job fail");
    }
  };

  return (
    <div className="post">
      <Modal
        open={status}
        onOk={() => {
          setStatus;
        }}
        onCancel={setStatus}
        title={
          <div className="post__header">
            <img src={user.avt} />
            <h4>Post a job on Cremo</h4>
          </div>
        }
        centered
        footer={[
          <div>
            {/* <div className="post__footer">
              <h4 onClick={setStatus}>Cancel</h4>
              <Button className="post__footer__button">Post my job</Button>
            </div> */}
          </div>,
        ]}
        className="post-container"
      >
        <div className="post__container__details">
          <Form onFinish={onFinish}>
            <p>
              {" "}
              Job title <span style={{ color: "red" }}>*</span>
            </p>
            <Form.Item
              name="title"
              maxLength={70}
              showCount
              rules={[
                {
                  required: true,
                  message: (
                    <div>
                      <WarningFilled /> Please input title job!
                    </div>
                  ),
                },
              ]}
            >
              <Input
                onInput={(e) => setTitle(e.target.value)}
                placeholder="e.g. landing page, iOS icon"
                maxLength={70}
                showCount
                className="post__container__details__input"
              />
            </Form.Item>
            <p>
              Give us your expect price and deadline for this job?{" "}
              <span style={{ color: "red" }}>*</span>
            </p>

            <Form.Item
              name="price"
              label="Price"
              // noStyle
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <InputNumber
                min={1}
                style={{
                  textAlign: "center",
                  width: "92%",
                  marginLeft: "1.8em",
                }}
              />
            </Form.Item>

            <Form.Item
              name="date"
              label="Deadline"
              {...config}
              style={{ paddingTop: "0.5em" }}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <p>
              Add your job description <span style={{ color: "red" }}>*</span>
            </p>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: (
                    <div>
                      <WarningFilled /> Please input your description job!
                    </div>
                  ),
                },
              ]}
            >
              <TextArea
                onInput={(e) => setDescription(e.target.value)}
                maxLength={1000}
                rows={8}
                placeholder="Looking to add another landing page to my current Webflow site..."
                className="post__container__details__input"
              />
            </Form.Item>

            <Tag
              setSelectedTags={setSelectedTags}
              selectedTags={selectedTags}
            />
            <div className="post__footer">
              <h4 onClick={setStatus}>Cancel</h4>
              <Button htmlType="submit" className="post__footer__button">
                Post my job
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default PostJob;
