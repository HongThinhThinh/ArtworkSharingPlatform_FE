import React from "react";
import "./Workart.scss";
import WorkartInfo from "../workartInfo/WorkartInfo";
import WorkartMedia from "../workartMedia/WorkartMedia";

function Workart({
  idArtwork,
  idCreator,
  image,
  name,
  avatar,
  countLike,
  countComment,
  interactionLike,
  price,
}) {
  return (
    <div data-aos="fade-up">
      <WorkartMedia image={image} id={idArtwork} />
      <WorkartInfo
        price={price}
        interactionLike={interactionLike}
        idArtwork={idArtwork}
        idCreator={idCreator}
        name={name}
        avatar={avatar}
        countLike={countLike}
        countComment={countComment}
      />
    </div>
  );
}

export default Workart;
