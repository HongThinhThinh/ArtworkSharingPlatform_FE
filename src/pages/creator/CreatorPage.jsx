import CreatorInfo from "../../component/creatorInfo/CreatorInfo";
import { Layout } from "antd";
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

function CreatorPage() {
  const isChangeLayout = useMediaQuery({ maxWidth: 1510 });
  const { id } = useParams();

  const [data, setData] = useState("");
  console.log(id);
  useEffect(() => {
    getDetailCreator();
  }, [id]);

  const getDetailCreator = async () => {
    try {
      const response = await api.get(`/getCreator-detail/${id}`);
      setData(response.data.data);
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

      <Content
        width={isChangeLayout ? "100%" : "75%"}
        className={styles.contentStyle}
      >
        <ChangeTabCreator />
        <CreatorWorkart
          list={data.artworks}
          style={{ paddingLeft: "2em", paddingBottom: "3em" }}
        />
      </Content>
    </Layout>
  );
}

export default CreatorPage;
