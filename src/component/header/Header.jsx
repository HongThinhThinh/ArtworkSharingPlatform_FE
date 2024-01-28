import { Col, Row } from "antd";
import Logo from "../Logo/Logo";
import SignInUp from "../signInUp/SignInUp";
import Navigator from "../navigator/Navigator";
import "./Header.scss";
import StyledSearch from "../Search/Search";
import Account from "../signInUp/Account";

function Header() {
  const role = localStorage.getItem("role");
  console.log(role);
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
          <Col xl={6} lg={6}></Col>
          <Col
            xl={9}
            lg={8}
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
