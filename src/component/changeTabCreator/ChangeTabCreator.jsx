import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ChangeTabCreator.scss";

function ChangeTabCreator() {
  const location = useLocation();
  console.log(location.pathname);
  const [status, setStatus] = useState(
    location.pathname.includes("work")
      ? "work"
      : location.pathname.includes("collections")
      ? "collections"
      : location.pathname.includes("liked")
      ? "liked"
      : location.pathname.includes("about")
      ? "about"
      : "work"
  );
  return (
    <div className="change-tab-creator">
      <Link
        to="/creator/work"
        className={`change-tab-creator__work ${
          status == "work" ? "active" : ""
        }`}
        onClick={() => setStatus("work")}
      >
        Work
      </Link>
      <Link
        to="/creator/collections"
        className={`change-tab-creator__collections ${
          status == "collections" ? "active" : ""
        }`}
        onClick={() => setStatus("collections")}
      >
        Collections
      </Link>
      <Link
        className={`change-tab-creator__liked ${
          status == "liked" ? "active" : ""
        }`}
        onClick={() => setStatus("liked")}
      >
        Liked Shots
      </Link>
    </div>
  );
}

export default ChangeTabCreator;
