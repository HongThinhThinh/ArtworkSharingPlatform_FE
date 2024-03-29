import React, { useMemo } from "react";
import Hero from "../../sections/hero/Hero";
import SwiperInfo from "../../sections/swiper/SwiperInfo";
import WorkartSection from "../../sections/workartSection/WorkartSection";
import CategorySlider from "../../sections/categorySlider/CategorySlider";
import BrandMessage from "../../sections/brandMessage/BrandMessage";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const memoSwiper = useMemo(() => {
    return <SwiperInfo />;
  }, []);
  const memoCategories = useMemo(() => {
    return <CategorySlider />;
  }, []);
  document.body.style.background =
    location.pathname === "/"
      ? "linear-gradient(0deg, rgba(255, 255, 255, 1) 60%, #f8f7f4 100%)"
      : "white";
  return (
    <div className="homepage">
      <Hero />
      {memoSwiper}
      <WorkartSection />
      <BrandMessage />
      {memoCategories}
    </div>
  );
}

export default HomePage;
