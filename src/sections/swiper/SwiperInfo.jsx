import React, { useEffect, useState } from "react";
import "./SwiperInfo.scss";
import axios from "axios";
import InfoCard from "../../component/infoCard/InfoCard";
import Slider from "react-slick";

export default function SwiperInfo() {
  const [datas, setDatas] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 1500,
  };

  const fetch = async () => {
    const response = await axios.get(
      "https://65a7402a94c2c5762da65821.mockapi.io/api/Artwork"
    );
    setDatas(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="info-scroller" data-direction="left" data-speed="slow">
      <h2 className="info-scroller__title" data-aos="fade-right">
        Top creators
      </h2>
      <Slider {...settings} className="info-scroller__inner">
        {datas.map((data) => (
          <InfoCard
            key={data.id}
            id={data.id}
            name={data.name}
            role={data.role}
            avatar={data.avatar}
            tags={data.tags}
          />
        ))}
      </Slider>
    </div>
  );
}
