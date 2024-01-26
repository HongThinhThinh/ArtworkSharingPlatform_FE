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
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6} xxl={6}>
          <Workart image="https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x" />
        </Col>
      </Row>
      <button className="workart-section__more">Browse more inspiration</button>
    </div>
  );
}

export default WorkartSection;
