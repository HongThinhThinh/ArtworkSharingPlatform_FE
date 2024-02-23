import React, { useState } from "react";
import ImgPreview from "../../pages/Image/Image";

import "./PostView.scss";
import { Button, Modal } from "antd";
function PostView({ img, title,avatar,name,description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="postview">
      <ImgPreview
        width={300}
        height={250}
        style={{ borderRadius: "10px", border: "none", outline: "none" }}
        src={img}
      />
      <div className="postview__content">
        <div className="postview__content__info">
          <img src={avatar} />

          <div className="postview__content__info__details">
            <h4>{name}</h4>
            <p> 1 hour ago</p>
          </div>
        </div>
        <h1>{title}</h1>
        <p>
          {description}
        </p>

        <div className="postview__content__button">
          <Button className="postview__content__button__detail">Accept</Button>
          <Button
            className="postview__content__button__detail"
            onClick={showModal}
          >
            Deny
          </Button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Reason deny"
      >
        <div class="col-span-full">
          <label
            for="street-address"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autocomplete="street-address"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label
            for="about"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Reason
          </label>
          <div class="mt-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PostView;
