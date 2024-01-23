import React from "react";
import { Link } from "react-router-dom";
import "./BrandMessage.scss";

function BrandMessage() {
  return (
    <div className="footer-cta">
      <h1 className="footer-cta__title">
        Find your next
        <br />
        designer today
      </h1>
      <h5 className="footer-cta__subtitle">
        The world’s leading brands use Dribbble to hire creative talent. Browse
        millions of top-rated portfolios to find your perfect creative match.
      </h5>
      <div className="footer-cta__link-to">
        <Link className="footer-cta__link-to__getStarted">Get started now</Link>
        <Link className="footer-cta__link-to__hiring">Learn about hiring</Link>
      </div>
      <h5 className="footer-cta__subtitle hiring-question">
        Are you a designer?{" "}
        <Link to="" className="footer-cta__subtitle__join">
          Join Cremo
        </Link>
      </h5>
    </div>
  );
}

export default BrandMessage;
