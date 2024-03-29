import React from "react";
import "./InfoCard.scss";
import { useNavigate } from "react-router-dom";

function InfoCard({ id, avatar, name, role, tags, onClick }) {
  const navigate = useNavigate();
  console.log(tags);
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/creator/${id}`)}
      className="border-card"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="hero-marquee-item" key={id}>
        <div className="hero-marquee-item__info">
          <div className="hero-marquee-item__info__name">{name}</div>
          <div className="hero-marquee-item__info__title">{role}</div>

          <ul className="hero-marquee-item__info__tags">
            {tags?.map((tag, index) => (
              <li className="hero-marquee-item__info__tags__tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-marquee-item__media">
          <img
            alt="Mercedes Bazan"
            className="lazypreload lazyautosizes lazyloaded"
            data-sizes="auto"
            src={avatar}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
