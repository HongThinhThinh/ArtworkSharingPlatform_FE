import React, { useEffect, useState } from "react";
import "./SwiperInfo.scss";
import axios from "axios";
import InfoCard from "../../component/infoCard/InfoCard";

export default function SwiperInfo() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const scrollers = document.querySelectorAll(".info-scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".info-scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  const fetch = async () => {
    const response = await axios.get(
      "https://65a7402a94c2c5762da65821.mockapi.io/api/Artwork"
    );
    setDatas(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(datas);

  return (
    <div className="info-scroller" data-direction="left" data-speed="slow">
      <div className="info-scroller__inner">
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
      </div>
    </div>
  );
}
