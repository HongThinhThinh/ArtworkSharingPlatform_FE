import React, { useState } from "react";
import "./PostJob.scss";
import { WarningFilled } from "@ant-design/icons";
import api from "../../config/axios";
import { alertFail, alertSuccess } from "../../assets/hook/useNotification";
import { getCurrentDateTime } from "../../assets/hook/useGetTime";
import { useParams } from "react-router-dom";
import { Button, DatePicker, Form, Input, InputNumber, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import Tag from "../tags/Tag";

function PostJob({ status, setStatus }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
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
            <img src="https://cdn.dribbble.com/users/1290912/screenshots/18070049/media/e197215b0ae2cd3eda124be41a3e04bf.png?resize=320x240&vertical=center" />
            <h4>Post a job on Cremo</h4>
          </div>
        }
        centered
        footer={[
          <div>
            <div className="post__footer">
              <h4 onClick={setStatus}>Cancel</h4>
              <Button className="post__footer__button">Post my job</Button>
            </div>
          </div>,
        ]}
        className="post-container"
      >
        <div className="post__container__details">
          <Form.Item
            name="title"
            maxLength={30}
            showCount
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
            <p>
              {" "}
              Job title <span style={{ color: "red" }}>*</span>
            </p>
            <Input
              onInput={(e) => setTitle(e.target.value)}
              placeholder="e.g. landing page, iOS icon"
              maxLength={30}
              showCount
              className="post__container__details__input"
            />
          </Form.Item>

          <div>
            <p>
              Give us your expect price and deadline for this job?{" "}
              <span style={{ color: "red" }}>*</span>
            </p>

            <Form.Item
              name="number"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <div style={{ display: "flex" }}>
                {" "}
                <p style={{ fontSize: "1em", marginTop: "0.2em" }}>Price($):</p>
                <InputNumber
                  min={1}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginLeft: "1.1em",
                  }}
                />
              </div>
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
          </div>

          <Form.Item name="description">
            <p>
              Add your job description <span style={{ color: "red" }}>*</span>
            </p>
            <TextArea
              onInput={(e) => setDescription(e.target.value)}
              maxLength={300}
              rows={8}
              placeholder="Looking to add another landing page to my current Webflow site..."
              className="post__container__details__input"
            />
          </Form.Item>
        </div>
        <Tag setSelectedTags={setSelectedTags} selectedTags={selectedTags} />
      </Modal>
    </div>
  );
}

export default PostJob;
