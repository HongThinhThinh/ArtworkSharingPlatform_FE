import { Col, Row } from "antd";
import React from "react";
import Workart from "../../component/workart/Workart";
import "./WorkartSection.scss";

function WorkartSection() {
  return (
    <div className="workart-section">
      <h2 className="workart-section__title">Explore inspiring designs</h2>
      <Row container gutter={32}>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart />
        </Col>
      </Row>
      <button className="workart-section__more">Browse more inspiration</button>
    </div>
  );
}

export default WorkartSection;
