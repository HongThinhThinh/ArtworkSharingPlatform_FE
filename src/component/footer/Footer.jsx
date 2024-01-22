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
    <div class="footer-v2__container">
      <div className="footer-v2__upper">
        <div className="logo">
          <Logo />
        </div>
        <div className="footer-v2__links">
          <Link className="navigator__nav" to="/login">
            For designers
          </Link>
          <Link className="navigator__nav" to="/login">
            Hire talent
          </Link>
          <Link className="navigator__nav" to="/login">
            Inspiration
          </Link>
          <Link className="navigator__nav" to="/login">
            Advertising
          </Link>
          <Link className="navigator__nav" to="/login">
            Blog
          </Link>
          <Link className="navigator__nav" to="/login">
            About
          </Link>
          <Link className="navigator__nav" to="/login">
            Carerrs
          </Link>
          <Link className="navigator__nav" to="/login">
            Support
          </Link>
        </div>
        <div className="footer-v2__social-links">
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="footer-v2__lower">
        <div className="footer-v2__lower-list">
          <p>&copy;{new Date().getFullYear()} Cremo</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>

        <div className="footer-v2__lower-list">
          <p>Jobs</p>
          <p>Designers</p>
          <p>Freelancers</p>
          <p>Tags</p>
          <p>Places</p>
          <p>Resoursce</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
