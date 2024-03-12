import React, { useEffect, useState } from "react";
import "./SwiperInfo.scss";
import axios from "axios";
import InfoCard from "../../component/infoCard/InfoCard";
import Slider from "react-slick";
import api from "../../config/axios";

export default function SwiperInfo() {
  const [datas, setDatas] = useState([]);
  const [data2, setData2] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          speed: 400,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          speed: 400,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          speed: 400,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          speed: 400,
          autoplaySpeed: 1500,
        },
      },
    ],
  };

  const fetch = async () => {
    const response = await api.get("/topCreator");
    const response2 = await axios.get(
      "https://65a7402a94c2c5762da65821.mockapi.io/api/Artwork"
    );
    console.log(response.data.data);
    setDatas(response.data.data);
    setData2(response2.data);
    console.log(response2.data);
  };

  useEffect(() => {
    fetch();
  }, []);
  console.log(data2[0]);

  return (
    <div className="info-scroller" data-direction="left" data-speed="slow">
      <h2 className="info-scroller__title" data-aos="fade-right">
        Top Contributors
      </h2>
      <Slider {...settings} className="info-scroller__inner">
        {datas?.map((data, index) => (
          <InfoCard
            key={data?.id}
            id={data?.id}
            name={data?.name}
            role={data?.role}
            avatar={data?.avt}
            tags={data2[index]?.tags}
          />
        ))}
      </Slider>
    </div>
  );
}
