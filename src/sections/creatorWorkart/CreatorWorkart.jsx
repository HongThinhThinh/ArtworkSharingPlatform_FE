import { Col, Row } from "antd";
import React from "react";
import WorkartMedia from "../../component/workartMedia/WorkartMedia";
import { useStateValue } from "../../Context/StateProvider";

function CreatorWorkart({ list = [] }) {
  return (
    <Row gutter={30} style={{ width: "100%" }}>
      {list.map((item) => {
        return (
          <Col key={item.id} xs={24} sm={12} lg={8}>
            <WorkartMedia image={item.image} />
          </Col>
        );
      })}
    </Row>
  );
}

export default CreatorWorkart;
