import "./ArtworkDetails.scss";
import ArtworkInfo from "../../component/ArtworkInfo/ArtworkInfo";
import ListFeedback from "../../component/ListFeedback/ListFeedback";
import WorkartSection from "../../sections/workartSection/WorkartSection";
import { useParams } from "react-router-dom";
import api from "../../config/axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import RoundedBtn from "../../component/rounded-button/RoundedButton";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

function ArtworkDetails() {
  const [open, setOpen] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const { id } = useParams();

  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancelDelete = () => {
    setOpenConfirmDelete(false);
  };

  const confirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  useLayoutEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/artwork-detail/${id}`);
        const { data } = response.data;
        setUser(data.user || {});
        setData(data || {});
      } catch (error) {
        console.error("Error fetching artwork details:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <div className="artworkDetails">
        <div className="artworkDetails--left">
          <div className="artworkDetails--left--content">
            <ArtworkInfo img={data.image} />
          </div>
        </div>
        <div className="artworkDetails--right">
          <ListFeedback
            id={user.id}
            title={data.title}
            description={data.description}
            avt={user.avt || "abc"}
            name={user.name}
            setOpenUpdate={setOpen}
            setOpenDelete={setOpenConfirmDelete}
          />
        </div>
        <Modal
          open={open}
          title="Change Content Artwork"
          onCancel={handleCancel}
          footer={null}
        >
          <Form
          //onFinish={onFinish}
          >
            <div style={{ fontFamily: "MediumCereal", marginTop: "3em" }}>
              <Form.Item>
                <h3
                  style={{
                    fontFamily: "MediumCereal",
                  }}
                >
                  Title
                </h3>
                <Form.Item
                  name="title"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input!",
                    },
                  ]}
                >
                  <Input style={{ height: "3em" }} />
                </Form.Item>
              </Form.Item>

              <Form.Item name="description">
                <h3
                  style={{
                    fontFamily: "MediumCereal",
                  }}
                >
                  Description
                </h3>
                <Form.Item
                  name="description"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input!",
                    },
                  ]}
                >
                  <Input style={{ height: "3em" }} />
                </Form.Item>
              </Form.Item>
            </div>
            <Form.Item>
              <RoundedBtn
                color="#2C547F"
                style={{ width: "100%", transform: "translateY(1em)" }}
              >
                Submit
              </RoundedBtn>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          open={openConfirmDelete}
          title={
            <>
              <ExclamationCircleTwoTone twoToneColor="#F6F61D" /> Are your sure
              to detele this artwork?
            </>
          }
          onCancel={handleCancelDelete}
          footer={
            <>
              <Button onClick={handleCancelDelete}>Cancel</Button>
              <Button type="primary" onClick={confirmDelete}>
                Confirm
              </Button>
            </>
          }
        >
          <p>If you click confirm your artwork will never comeback!</p>
        </Modal>
      </div>
      <WorkartSection />
    </>
  );
}

export default ArtworkDetails;
