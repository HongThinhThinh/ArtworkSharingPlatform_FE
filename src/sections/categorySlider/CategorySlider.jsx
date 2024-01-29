import React, { useEffect, useState } from "react";
import "./CategorySlider.scss";
import Category from "../../component/category/Category";
import Slider from "react-slick";

export default function CategorySlider() {
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
  return (
    <div className="category-scroller" data-direction="left" data-speed="slow">
      <Slider {...settings} className="category-scroller__inner">
        <Category
          image="https://cdn.dribbble.com/userupload/12670047/file/original-efd046753a8e4c7a23870b2e6c223bc8.png?format=webp&resize=273x205&vertical=center"
          title="Branding"
          className="category-scroller__inner__category"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12464781/file/original-8e598ef84192d0a3be9c6b8a1603ab57.png?format=webp&resize=273x205&vertical=center"
          title="Print"
          className="category-scroller__inner__category"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12536751/file/original-a3e5d82ac26a9f2a40d0e3d1232917cc.png?format=webp&resize=273x205&vertical=center"
          title="Mobile"
          className="category-scroller__inner__category"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12548097/file/original-1b993670295499cfee3376a0471d17c3.png?crop=0x0-800x600&format=webp&resize=273x205&vertical=center"
          title="Illustration"
          className="category-scroller__inner__category"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png"
          title="Web Design"
          className="category-scroller__inner__category"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12455324/file/original-80821bcc9818e6b776a495c92035a078.jpg?format=webp&resize=273x205&vertical=center"
          title="Animation"
          className="category-scroller__inner__category"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/8176939/file/original-05eda5095928e324511145b4305c8715.png?crop=0x0-1600x1200&resize=450x338&vertical=center"
          title="Art"
          className="category-scroller__inner__category"
        />
      </Slider>
    </div>
  );
}
