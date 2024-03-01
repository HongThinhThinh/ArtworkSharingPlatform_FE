import { Button, Card, Col, Input, Row } from "antd";
import React, { useState } from "react";
import "./JobsPage.scss";
import JobsView from "../../component/jobsview/JobsView";
import CategorySlider from "../../sections/categorySlider/CategorySlider";
import { SearchOutlined } from "@ant-design/icons";
import { IoAdd } from "react-icons/io5";
import PostJob from "../../component/postJob/PostJob";
import FormRequest from "../../component/formRequest/FormRequest";

function JobsPage() {
  const [status, setStatus] = useState(false);
  return (
    <div className="jobspage">
      <div className="jobspage__hero">
        <h1>
          The #1 job board for <br />
          graphic design jobs
        </h1>
        <h5>
          Cremo is the heart of the design community and the best resource to
          discover <br /> and connect with designers and jobs worldwide.
        </h5>
        <Button
          className="jobspage__hero__submit"
          onClick={() => setStatus(!status)}
        >
          <IoAdd /> Post a jobs
        </Button>

        <PostJob status={status} setStatus={() => setStatus(!status)} />
      </div>
      <div className="jobspage__hero-banner">
        <div style={{ display: "flex" }}>
          <Button className="jobspage__hero-banner__submit">Job Board</Button>
          <p>Designer Search</p>
        </div>
        <Input
          placeholder=" Search by skill, tag..."
          prefix={<SearchOutlined />}
          className="jobspage__hero-banner__search"
        />
      </div>
      <div className="jobspage__new-opportunities">
        <h3>Recent posts</h3>
        <p>2 new opportunities posted today!</p>
      </div>
      <Row container style={{ margin: "2em" }}>
        <Col sm={24} md={24} lg={12}>
          <JobsView />
        </Col>
        <Col sm={24} md={24} lg={12}>
          <JobsView />
        </Col>
      </Row>
      <CategorySlider />
    </div>
  );
}

export default JobsPage;
