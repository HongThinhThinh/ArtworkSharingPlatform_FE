import React from "react";
import "./Workart.scss";
import WorkartInfo from "../workartInfo/WorkartInfo";
import WorkartMedia from "../workartMedia/WorkartMedia";
import WatermarkArtwork from "../waterMask/WatermarkArtwork";

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
    <div>
      {price > 0 ? (
        <WatermarkArtwork url={image} id={idArtwork} width={335} height={252} />
      ) : (
        <WorkartMedia image={image} id={idArtwork} />
      )}

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
