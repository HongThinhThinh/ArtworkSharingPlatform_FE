import React from "react";
import "./Collection.scss";

function Collection() {
  return (
    <div class="collection">
      <img
        src="https://cdn.dribbble.com/userupload/12673115/file/original-6feda166fa7214ac926a27daf79456b0.png?resize=2048x1536"
        alt="Main Phone"
        className="collection__main"
      />
      <div class="collection__sub-img">
        <img
          src="https://cdn.dribbble.com/userupload/12540378/file/original-3c76270084eb3002ee6a0af95b9e749a.png?resize=2048x1536"
          className="collection__sub-img__sub-1"
        />
        <img
          src="https://cdn.dribbble.com/userupload/12539875/file/original-0a3a36afaffada5c3c303b48320a79c6.png?resize=2048x1536"
          className="collection__sub-img__sub-2"
        />
        <img
          src="https://cdn.dribbble.com/userupload/10956502/file/original-ece24bc9391d2ef12b3b0bcafeafad49.png?resize=2048x1536"
          className="collection__sub-img__sub-3"
        />
      </div>
      <div class="collection__info">
        <h1>Betting App</h1>
        <p>47 Shots · 1 Designer</p>
      </div>
    </div>
  );
}

export default Collection;
