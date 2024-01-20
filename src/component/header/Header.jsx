import { Col, Row } from "antd";
import Logo from "../Logo/Logo";
import SignInUp from "../signInUp/SignInUp";
import Navigator from "../navigator/Navigator";

function Header() {
  return (
    <Row container className="header">
      <Col xl={4.5} lg={4.5} className="header__bar">
        <Navigator />
      </Col>
      <Col xl={2} lg={2} className="header__logo">
        <Logo />
      </Col>
      <Col
        xl={4.5}
        lg={4.5}
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <SignInUp />
      </Col>
    </Row>
  );
}

export default Header;
