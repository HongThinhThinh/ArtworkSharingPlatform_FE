import React, { useEffect, useState } from "react";
import users from "../../../../data/users";
import { Col, Row } from "antd";
import MyResponsivePie from "../../../../apps/charts/pie-chart/MyPie";
import Increment from "../../../../component/increment/Increment";
import api from "../../../../config/axios";
import MyResponsiveBar from "../../../../apps/charts/bar-chart/MyBar";
import Revenue from "../../../../component/revenue/Revenue";

function Overview() {
  const [data, setData] = useState();
  const [dataUsers, setDataUsers] = useState();
  const [revenue, setRevenue] = useState();
  const [revenueData, setRevenueData] = useState();
  const fetch = async () => {
    const response = await api.get(`/countUser`);
    setData(response.data.data);
  };

  const fetchRevenue = async () => {
    const response = await api.get(
      `/ProfitByMonth?year=${new Date().getFullYear()}`
    );
    setRevenue(response.data.data);
  };
  useEffect(() => {
    fetch();
    let users = [
      {
        id: "Moderators",
        label: "Moderators",
        value: data ? data.modQuantity : 0,
        color: "hsl(290, 70%, 50%)",
      },

      {
        id: "Creators",
        label: "Creators",
        value: data ? data.creatorQuantity : 0,
        color: "hsl(176, 70%, 50%)",
      },
      {
        id: "Audiences",
        label: "Audiences",
        value: data ? data.audienceQuantity : 0,
        color: "hsl(90, 70%, 50%)",
      },
    ];
    setDataUsers(users);
    fetchRevenue();
    const revenueData = [
      {
        month: "1",
        revenue: revenue ? revenue[0].revenuePortal : 0,
      },
      {
        month: "2",
        revenue: revenue ? revenue[1].revenuePortal : 0,
      },
      {
        month: "3",
        revenue: revenue ? revenue[2].revenuePortal : 0,
      },
      {
        month: "4",
        revenue: revenue ? revenue[3].revenuePortal : 0,
      },
      {
        month: "5",
        revenue: revenue ? revenue[4].revenuePortal : 0,
      },
      {
        month: "6",
        revenue: revenue ? revenue[5].revenuePortal : 0,
      },
      {
        month: "7",
        revenue: revenue ? revenue[6].revenuePortal : 0,
      },
      {
        month: "8",
        revenue: revenue ? revenue[7].revenuePortal : 0,
      },
      {
        month: "9",
        revenue: revenue ? revenue[8].revenuePortal : 0,
      },
      {
        month: "10",
        revenue: revenue ? revenue[9].revenuePortal : 0,
      },
      {
        month: "11",
        revenue: revenue ? revenue[10].revenuePortal : 0,
      },
      {
        month: "12",
        revenue: revenue ? revenue[11].revenuePortal : 0,
      },
    ];
    setRevenueData(revenueData);
  }, [data]);

  return (
    <div
      style={{
        padding: "0 4em",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <Row style={{ marginBottom: "2em" }}>
        <Col lg={21} style={{}}></Col>
        <Col lg={3} style={{}}>
          <Increment data={data?.totalMember} />
        </Col>
      </Row>
      <Row>
        <Col lg={11} style={{ height: "60vh" }}>
          <MyResponsivePie
            data={data ? dataUsers : []}
            title="Amount of users in system"
            y={40}
          />
        </Col>
        <Col lg={2} style={{ height: "60vh" }}></Col>
        <Col lg={11} style={{ height: "60vh" }}>
          <MyResponsiveBar data={revenue ? revenueData : []} />
        </Col>
      </Row>
      <Row>
        <Revenue transaction="transactionsById" />
      </Row>
    </div>
  );
}

export default Overview;
