import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import WorkartMedia from "../../component/workartMedia/WorkartMedia";
import { useStateValue } from "../../Context/StateProvider";
import api from "../../config/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/counterSlice";
import { Link } from "react-router-dom";
import { HeartTwoTone, LeftCircleTwoTone } from "@ant-design/icons";
import Workart from "../../component/workart/Workart";

function CreatorWorkart({ status }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await api.get(`/artworkByCreator-${status}`);
      setData(response.data.data);
      console.log(response.data.data);
    };
    getAll();
  }, [status]);

  return (
    <>
      <Row
        gutter={30}
        style={{ marginLeft: "8%", width: "85%", padding: "3em" }}
      >
        {/* {list.map((item) => {
        return (
          <Col key={item.id} xs={24} sm={12} lg={8}>
            <WorkartMedia id={item.id} image={item.image} />
          </Col>
        );
      })} */}

        {data?.map((item) => {
          return (
            <Col key={item.id} xs={24} sm={12} lg={8}>
              <Workart
                price={item.price}
                idArtwork={item?.id}
                idCreator={item.user.id}
                image={item.image}
                name={item.user.name}
                avatar={item.user.avt}
                countLike={item.countLike}
                countComment={item.countComment}
                interactionLike={item.interactionLike}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default CreatorWorkart;

// <Col  xs={24} sm={12} lg={8}>

// <WorkartMedia id={43} image="https://firebasestorage.googleapis.com/v0/b/swp-asp.appspot.com/o/original-17e6568a9162bb6b51733fb45c5772f4.jpg?alt=media&token=8fa3e113-9eab-4f9a-a07a-3974678ad6e2" />
// </Col>
