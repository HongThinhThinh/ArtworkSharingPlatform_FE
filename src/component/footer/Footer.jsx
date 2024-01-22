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
        <Col lg={3} className="footer__upper__logo">
          <Logo />
        </Col>
        <Col lg={18}>
          <Navigator status="footer" />
        </Col>
        <Col lg={3} className="footer__upper__icons">
          <FaTwitter />
          <FaFacebookSquare />
          <FaInstagram />
          <FaPinterest />
        </Col>
      </Row>
      <Row container className="footer__lower">
        <Col lg={8} className="footer__lower__privacy">
          <span className="footer__lower__privacy__tag">
            &copy;{new Date().getFullYear()} Cremo
          </span>
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
        <Col lg={8}></Col>
        <Col lg={8} className="footer__lower__about">
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
