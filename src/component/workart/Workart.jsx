import React from "react";
import "./Workart.scss";
import WorkartInfo from "../workartInfo/WorkartInfo";
import WorkartMedia from "../workartMedia/WorkartMedia";

function Workart({ image }) {
  return (
    <>
      <WorkartMedia image={image} />
      <WorkartInfo />
    </>
  );
}

export default Workart;
