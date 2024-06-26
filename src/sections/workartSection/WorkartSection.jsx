import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Workart from "../../component/workart/Workart";
import "./Workartsection.scss";
import api from "../../config/axios";
import { useNavigate, useParams } from "react-router-dom";

function WorkartSection() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getAll = async () => {
      const response = await api.get("/artworks");
      setData(response.data.data);
    };
    getAll();
  }, []);
  return (
    <div className="workart-section">
      <h2 className="workart-section__title " data-aos="fade-">
        Explore inspiring designs
      </h2>
      <Row container gutter={30}>
        {data?.map((artwork, index) => (
          <Col
            // data-aos="fade-up"
            style={{ cursor: "pointer" }}
            xs={24}
            sm={12}
            lg={8}
            xl={6}
            xxl={6}
            key={index}
          >
            <Workart
              price={artwork.price}
              idArtwork={artwork?.id}
              idCreator={artwork.user.id}
              image={artwork.image}
              name={artwork.user.name}
              avatar={artwork.user.avt}
              countLike={artwork.countLike}
              countComment={artwork.countComment}
              interactionLike={artwork.interactionLike}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default WorkartSection;
