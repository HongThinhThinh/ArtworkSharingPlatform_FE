import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

function Category({ image, title }) {
  return (
    <Link className="category">
      <img src={image} className="category__image" />
      <p className="category__title">{title}</p>
    </Link>
  );
}

export default Category;
