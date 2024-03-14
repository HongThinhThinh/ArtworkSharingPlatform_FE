import CreatorInfo from "../../component/creatorInfo/CreatorInfo";
import { Col, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Outlet, useParams } from "react-router-dom";
import ChangeTabCreator from "../../component/changeTabCreator/ChangeTabCreator";
import { useMediaQuery } from "react-responsive";
import styles from "./CreatorPage.module.scss";
import api from "../../config/axios";
import { useEffect, useState } from "react";
import { alertFail } from "../../assets/hook/useNotification";
import { useStateValue } from "../../Context/StateProvider";
import CreatorWorkart from "../../sections/creatorWorkart/CreatorWorkart";
import Workart from "../../component/workart/Workart";

function CreatorPage() {
  const isChangeLayout = useMediaQuery({ maxWidth: 1510 });
  const { id } = useParams();

  const [data, setData] = useState("");
  const [artworks, setartworks] = useState([]);

  console.log(id);
  useEffect(() => {
    getDetailCreator();
  }, [id]);

  const getDetailCreator = async () => {
    try {
      const response = await api.get(`/getCreator-detail/${id}`);
      setData(response.data.data);
      setartworks(response.data.data.artworks);
      // console.log(response.data.data.artworks);
    } catch (e) {
      alertFail("Fail to load");
    }
  };

  const tags = [
    "art direction",
    "design system",
    "leadership",
    "mobile design",
    "team management",
    "ux research",
    "web design",
  ];
  console.log(data);
  return (
    <Layout className={styles.layoutStyle}>
      {isChangeLayout ? (
        <CreatorInfo
          avatar={data.avt || "abc"}
          name={data.name}
          followers="9,511"
          following="1,325"
          likes="14,897"
          openingLine="We make complex applications simple for users"
          tags={tags}
          position="top"
        />
      ) : (
        <Sider width="20%" className={styles.siderStyle}>
          <CreatorInfo
            avatar={data.avt || "abc"}
            name={data.name}
            followers="9,511"
            following="1,325"
            likes="14,897"
            openingLine="We make complex applications simple for users"
            tags={tags}
            position="left"
          />
        </Sider>
      )}
      <h1 style={{ fontSize: "20px", fontWeight: "500" }}>Artworks</h1>

      <Content
        width={isChangeLayout ? "100%" : "75%"}
        className={styles.contentStyle}
      >
        {/* <ChangeTabCreator /> */}
        {/* <CreatorWorkart
          list={data.artworks}
          style={{ paddingLeft: "2em", paddingBottom: "3em" }}
        /> */}
        <Row x container gutter={32}>
        {artworks.map((artwork, index) => (
          <Col
            style={{ cursor: "pointer" }}
            xs={24}
            sm={12}
            lg={8}
            xl={8}
            xxl={8}
            // span={8}
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
      </Content>
    </Layout>
  );
}

export default CreatorPage;
