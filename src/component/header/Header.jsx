import { Col, Row } from "antd";
import Logo from "../logo/Logo";
import SignInUp from "../signInUp/SignInUp";
import Navigator from "../navigator/Navigator";
import "./Header.scss";
import StyledSearch from "../Search/Search";
import Account from "../signInUp/Account";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isFold = useMediaQuery({ maxWidth: 281 });
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const isIPad = useMediaQuery({ maxWidth: 1024, minWidth: 921 });

  return isIPad ? (
    <Row container className="header">
      <Col xl={4} lg={4} className="header__logo">
        <Logo />
      </Col>
      <Col xl={10} lg={9} className="header__bar">
        <Navigator />
      </Col>

      <Col xl={10} lg={11} className="header__action">
        <Row>
          <Col xl={6} lg={5}></Col>
          <Col
            xl={9}
            lg={9}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <StyledSearch />
          </Col>
          <Col xl={9} lg={10}>
            {localStorage.getItem("role") != null ? <Account /> : <SignInUp />}
          </Col>
        </Row>
      </Col>
    </Row>
  ) : isMobile ? (
    <Row className="header">
      <Col sm={2} className="header__bar">
        <Navigator />
      </Col>
      <Col
        sm={3}
        className="header__logo"
        style={{ display: "flex", justifyContent: "start" }}
      >
        <Logo />
      </Col>
      <Col
        sm={19}
        className="header__action"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Row>
          <Col lg={5}></Col>
          <Col
            lg={9}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <StyledSearch />
          </Col>
          <Col lg={10}>
            {localStorage.getItem("role") != null ? <Account /> : <SignInUp />}
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <Row container className="header">
      <Col xl={10} lg={9} className="header__bar">
        <Navigator />
      </Col>
      <Col xl={4} lg={4} className="header__logo">
        <Logo />
      </Col>
      <Col xl={10} lg={11} className="header__action">
        <Row>
          <Col xl={6} lg={5}></Col>
          <Col
            xl={9}
            lg={9}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <StyledSearch />
          </Col>
          <Col xl={9} lg={10}>
            {localStorage.getItem("role") != null ? <Account /> : <SignInUp />}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
