import CreatorInfo from "../../component/creatorInfo/CreatorInfo";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import ChangeTabCreator from "../../component/changeTabCreator/ChangeTabCreator";
import { useMediaQuery } from "react-responsive";
import styles from "./CreatorPage.module.scss";

function CreatorPage() {
  const isChangeLayout = useMediaQuery({ maxWidth: 1510 });

  const tags = [
    "art direction",
    "design system",
    "leadership",
    "mobile design",
    "team management",
    "ux research",
    "web design",
  ];

  return (
    <Layout className={styles.layoutStyle}>
      {isChangeLayout ? (
        <CreatorInfo
          avatar="https://cdn.dribbble.com/users/4949363/avatars/normal/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
          name="Ronas IT | UI/UX Team"
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
            avatar="https://cdn.dribbble.com/users/4949363/avatars/normal/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
            name="Ronas IT | UI/UX Team"
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
        <Outlet />
      </Content>
    </Layout>
  );
}

export default CreatorPage;
