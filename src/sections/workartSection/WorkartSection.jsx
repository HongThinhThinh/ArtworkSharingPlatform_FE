import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Workart from "../../component/workart/Workart";
import "./Workartsection.scss";
import api from "../../config/axios";

function WorkartSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const response = await api.get("/artworks");
      setData(response.data.data);
    };

    getAll();
  }, []);
  return (
    <div className="workart-section">
      <h2 className="workart-section__title" data-aos="fade-">
        Explore inspiring designs
      </h2>
      <Row container gutter={32}>
        {data.map((artwork, index) => (
          <Col xs={24} sm={12} lg={8} xl={6} xxl={6} key={index}>
            <Workart
              image={artwork.image}
              name={artwork.name}
              avatar={artwork.description}
            />
          </Col>
        ))}
      </Row>
      <button className="workart-section__more">Browse more inspiration</button>
    </div>
  );
}

export default WorkartSection;
