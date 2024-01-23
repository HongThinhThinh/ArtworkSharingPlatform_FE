import { Col, Row } from "antd";
import Logo from "../Logo/Logo";
import SignInUp from "../signInUp/SignInUp";
import Navigator from "../navigator/Navigator";
import "./Header.scss";
import StyledSearch from "../Search/Search";

function Header() {
  return (
    <Row container className="header">
      <Col xl={10} lg={10} className="header__bar">
        <Navigator />
      </Col>
      <Col xl={4} lg={4} className="header__logo">
        <Logo />
      </Col>
      <Col xl={10} lg={10} className="header__action">
        <Row>
          <Col xl={4} lg={4}></Col>
          <Col
            xl={11}
            lg={11}
            style={{ display: "flex", alignItems: "center" }}
          >
            <StyledSearch />
          </Col>
          <Col xl={9} lg={9}>
            <SignInUp />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
