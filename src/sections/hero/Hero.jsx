import React from "react";
import RandomColor from "../../component/randomColor/RandomColor";
import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero    ">
      <RandomColor>Over 8 billion ready-to-work creatives!</RandomColor>
      <h1 className="hero__title  ">
        Where creativity meets
        <br />
        mosaic of art
      </h1>
      <h5 className="hero__subtitle  animate__backInDown">
        Get inspired by the work of millions of top-rated designers & agencies
        around the world.
      </h5>
      <Link className="hero__getStarted ">Get started</Link>
    </div>
  );
}

export default Hero;
