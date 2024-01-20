import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";

function Navigator() {
  return (
    <div className="navigator">
      <Link className="navigator__nav" to="/login">
        Find talent
      </Link>
      <Link className="navigator__nav" to="/login">
        Inspiration
      </Link>
      <Link className="navigator__nav" to="/login">
        Jobs
      </Link>
      <Link className="navigator__nav" to="/login">
        Go Pro
      </Link>
    </div>
  );
}

export default Navigator;
