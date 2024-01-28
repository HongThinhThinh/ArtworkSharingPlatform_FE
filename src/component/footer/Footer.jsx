import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import Navigator from "../navigator/Navigator";
import Logo from "../Logo/Logo";
import "./Footer.scss";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <Row container className="footer">
      <Row container className="footer__upper">
        <Col sm={24} lg={3} xl={3} className="footer__upper__logo">
          <Logo />
        </Col>
        <Col
          sm={24}
          lg={18}
          xl={18}
          className="footer__upper__navigator-wrapper"
        >
          <Navigator
            status="footer"
            className="footer__upper__navigator-wrapper__navigator"
          />
        </Col>
        <Col sm={24} lg={3} xl={3} className="footer__upper__icons">
          <FaTwitter className="footer__upper__icons__icon" />
          <FaFacebookSquare className="footer__upper__icons__icon" />
          <FaInstagram className="footer__upper__icons__icon" />
          <FaPinterest className="footer__upper__icons__icon" />
        </Col>
      </Row>
      <Row container className="footer__lower">
        <Col xs={24} sm={24} lg={12} className="footer__lower__privacy">
          <p className="footer__lower__privacy__tag">
            &copy;{new Date().getFullYear()} Cremo
          </p>
          <Link to="/terms" className="footer__lower__privacy__tag">
            Terms
          </Link>
          <Link to="/privacy" className="footer__lower__privacy__tag">
            Privacy
          </Link>
          <Link to="/cookie-policy" className="footer__lower__privacy__tag">
            Cookies
          </Link>
        </Col>
        {/* <Col sm={5} md={4} lg={6}></Col> */}
        <Col xs={24} sm={24} lg={12} className="footer__lower__about">
          <Link to="/jobs" className="footer__lower__about__tag">
            Jobs
          </Link>
          <Link to="/designers" className="footer__lower__about__tag">
            Designers
          </Link>
          <Link to="/freelance-designers" className="footer__lower__about__tag">
            Freelancers
          </Link>
          <Link to="/tags" className="footer__lower__about__tag">
            Tags
          </Link>
          <Link to="/places" className="footer__lower__about__tag">
            Places
          </Link>
          <Link to="/resources" className="footer__lower__about__tag">
            Resources
          </Link>
        </Col>
      </Row>
    </Row>
  );
}

export default Footer;
