import React, { useEffect, useState } from "react";
import "./CategorySlider.scss";
import InfoCard from "../../component/infoCard/InfoCard";
import Category from "../../component/category/Category";

export default function CategorySlider() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".category-scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(
          ".category-scroller__inner"
        );
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="category-scroller" data-direction="left" data-speed="slow">
      <div className="category-scroller__inner">
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png?format=webp&resize=400x300&vertical=center"
          title="Web Design"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png?format=webp&resize=400x300&vertical=center"
          title="Web Design"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png?format=webp&resize=400x300&vertical=center"
          title="Web Design"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png?format=webp&resize=400x300&vertical=center"
          title="Web Design"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png?format=webp&resize=400x300&vertical=center"
          title="Web Design"
        />
      </div>
    </div>
  );
}
