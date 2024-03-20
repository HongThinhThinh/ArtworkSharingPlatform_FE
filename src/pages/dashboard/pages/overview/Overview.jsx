import React, { useEffect, useState } from "react";
import users from "../../../../data/users";
import { Col, Row } from "antd";
import MyResponsivePie from "../../../../apps/charts/pie-chart/MyPie";
import Increment from "../../../../component/increment/Increment";
import api from "../../../../config/axios";

function Overview() {
  const [data, setData] = useState();
  const fetch = async () => {
    const response = await api.get(`/countUser`);
    console.log(response.data.data);
    setData(response.data.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <Row>
      <Col lg={1} style={{ height: "60vh" }} className="usersPie"></Col>
      <Col lg={9} style={{ height: "60vh" }} className="usersPie">
        <MyResponsivePie data={users} title="Creator" y={40} />
      </Col>
      <Col lg={1} style={{ height: "60vh" }} className="usersPie"></Col>
      <Col lg={9} style={{ height: "60vh" }} className="usersPie">
        <MyResponsivePie data={users} title="Audience" y={100} />
      </Col>
      <Col lg={4} style={{ height: "60vh" }} className="usersPie">
        <Increment data={data} />
      </Col>
    </Row>
  );
}

export default Overview;
