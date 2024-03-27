import React, { useState } from "react";
import ImgPreview from "../../../Image/Image";
import "./AIPage.scss";
import image1 from "../../../../assets/CremoBackground.png";
import draw from "../../../../assets/Draw.png";
import drawing from "../../../../assets/Drawing.png";
import { Button, Input } from "antd";

function AIPage() {
  const [URL, setURL] = useState(image1);
  const [robot, setRobot] = useState(draw);
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="ai-page">
      <div className="ai-page__left">
        <h1>Generate Your Inspiration With AI</h1>
        <Input
          style={{ height: "4em", objectFit: "cover" }}
          placeholder="Put your idea here"
        />
        <div className="ai-page__left__bottom">
          <Button
            onClick={() => {
              setRobot(drawing);
              setIsClick(true);
            }}
          >
            Generate
          </Button>
        </div>
      </div>
      <div className="ai-page__right">
        {!isClick && <img src={robot}></img>}
        {isClick ? (
          <ImgPreview
            width="100%"
            src={drawing}
            style={{ objectFit: "cover" }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default AIPage;
