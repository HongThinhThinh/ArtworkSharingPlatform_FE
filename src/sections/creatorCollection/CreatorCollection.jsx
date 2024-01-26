import React from "react";
import Collection from "../../component/collection/Collection";
import { Col, Row } from "antd";

function CreatorCollection() {
  return (
    <Row
      container
      gutter={30}
      style={{ width: "100%", paddingLeft: 30, paddingTop: 30 }}
    >
      <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
        <Collection />
      </Col>
    </Row>
  );
}

export default CreatorCollection;
