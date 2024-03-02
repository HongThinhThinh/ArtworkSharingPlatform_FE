import ImgPreview from "../../pages/Image/Image";

import "./PostView.scss";
import { Button, Modal } from "antd";
import api from "../../config/axios";
import { alertSuccess } from "../../assets/hook/useNotification";
import { useState } from "react";
function PostView({ img, title, avatar, name, description, id, setReload }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  
  const handleApproveArtWork = async () => {
    const response = await api.put(`/artwork-approve/${id}`, {
      status: "active",
    });
    setReload(response);
    alertSuccess("Approve sucessfully");
  };

  // useEffect(() => {}, [data]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    const response = await api.put(`/artwork-approve/${id}`, {
      status: "reject",
      description: reason,
    });
    setIsModalOpen(false);
    alertSuccess("Reject and send reason to creator successfully");
    setReload(response);
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
        <p>{description}</p>

        <div className="postview__content__button">
          <Button
            onClick={handleApproveArtWork}
            className="postview__content__button__detail"
          >
            Approve
          </Button>
          <Button
            className="postview__content__button__detail"
            onClick={showModal}
          >
            Reject
          </Button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Reason reject"
      >
        <div class="col-span-full">
          <div class="mt-2">
            <textarea
              onInput={(e) => setReason(e.target.value)}
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
