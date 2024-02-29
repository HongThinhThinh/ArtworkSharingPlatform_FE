import { CommentOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import ImgPreview from "../../pages/Image/Image";
import "./DemoWithComment.scss";
import TextArea from "antd/es/input/TextArea";

function DemoWithComment({ imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="demo">
      <ImgPreview
        width={200}
        height={200}
        style={{
          borderRadius: "10px",
          border: "none",
          outline: "none",
        }}
        src={imageUrl}
      />
      <CommentOutlined className="demo__icon" onClick={showModal} />
      <Modal
        title="Comment of Demo"
        open={isModalOpen}
        footer={null}
        onCancel={closeModal}
      >
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
        <TextArea />
      </Modal>
    </div>
  );
}

export default DemoWithComment;
