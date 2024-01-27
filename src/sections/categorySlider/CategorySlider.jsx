import React, { useEffect, useState } from "react";
import "./CategorySlider.scss";
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
  });

  return (
    <div className="category-scroller" data-direction="left" data-speed="slow">
      <div className="category-scroller__inner">
        <Category
          image="https://cdn.dribbble.com/userupload/12670047/file/original-efd046753a8e4c7a23870b2e6c223bc8.png?format=webp&resize=273x205&vertical=center"
          title="Branding"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12464781/file/original-8e598ef84192d0a3be9c6b8a1603ab57.png?format=webp&resize=273x205&vertical=center"
          title="Print"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12536751/file/original-a3e5d82ac26a9f2a40d0e3d1232917cc.png?format=webp&resize=273x205&vertical=center"
          title="Mobile"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12548097/file/original-1b993670295499cfee3376a0471d17c3.png?crop=0x0-800x600&format=webp&resize=273x205&vertical=center"
          title="Illustration"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12452525/file/original-d4b2002fb779eb82a9edf7337efdf1af.png?format=webp&resize=400x300&vertical=center"
          title="Web Design"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/12455324/file/original-80821bcc9818e6b776a495c92035a078.jpg?format=webp&resize=273x205&vertical=center"
          title="Animation"
        />
        <Category
          image="https://cdn.dribbble.com/userupload/8176939/file/original-05eda5095928e324511145b4305c8715.png?crop=0x0-1600x1200&resize=450x338&vertical=center"
          title="Art"
        />
      </div>
    </div>
  );
}
