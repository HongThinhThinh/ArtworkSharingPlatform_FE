import React from "react";
import "./Workart.scss";
import WorkartInfo from "../workartInfo/WorkartInfo";
import WorkartMedia from "../workartMedia/WorkartMedia";

function Workart({ image, name, avatar }) {
  return (
    <div data-aos="fade-up">
      <WorkartMedia image={image} />
      <WorkartInfo name={name} avatar={avatar} />
    </div>
  );
}

export default Workart;
