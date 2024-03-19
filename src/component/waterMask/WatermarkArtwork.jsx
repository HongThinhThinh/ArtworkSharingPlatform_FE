import React, { useEffect } from "react";
import { Watermark } from "antd";
import { useNavigate } from "react-router-dom";

function WatermarkArtwork({ url, id }) {
  useEffect(() => {
    var canvas = document.getElementById("viewport");
    var ctx = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;

    var img = new Image();

    img.onload = start;
    img.src = url;

    let rate = img.height / img.width;
    let newWidth = 335;
    let newHeight = newWidth * rate;
    img.height = newHeight;
    img.width = newWidth;
    function start() {
      canvas.width = 335;
      canvas.height = 252;

      ctx.drawImage(img, 0, 0, 335, 252);
      var dataURL = watermarkedDataURL(canvas, "Cremo");
    }

    function watermarkedDataURL(canvas, text) {
      var tempCanvas = document.createElement("canvas");
      var tempCtx = tempCanvas.getContext("2d");
      var cw, ch;
      cw = tempCanvas.width = canvas.width;
      ch = tempCanvas.height = canvas.height;
      tempCtx.drawImage(canvas, 0, 0);
      tempCtx.font = "24px MediumCereal";
      var textWidth = tempCtx.measureText(text).width;
      tempCtx.globalAlpha = 0.5;
      tempCtx.fillStyle = "white";
      tempCtx.fillText(text, cw - textWidth - 10, ch - 20);
      tempCtx.fillStyle = "black";
      tempCtx.fillText(text, cw - textWidth - 10 + 2, ch - 20 + 2);
      // just testing by adding tempCanvas to document
      document.getElementById("viewport").replaceWith(tempCanvas);
      return tempCanvas.toDataURL();
    }
  }, [url]);

  const navigate = useNavigate();
  return (
    <div
      style={{
        borderRadius: "10px !important",
        marginTop: "50px !important",
      }}
      onClick={() => {
        navigate(`/artworkDetails/${id}`);
      }}
    >
      {url && <canvas id="viewport"></canvas>}
    </div>
  );
}

export default WatermarkArtwork;
