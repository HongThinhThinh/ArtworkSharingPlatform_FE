import React, { useState } from "react";
import ImgPreview from "../../../Image/Image";
import "./AIPage.scss";
import image1 from "../../../../assets/CremoBackground.png";
import draw from "../../../../assets/Draw.png";
import drawing from "../../../../assets/Drawing.png";
import { Button, Input } from "antd";
import axios from "axios";

function AIPage() {
  const [prompt, setPrompt] = useState("A cute baby sea otter");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const OPENAI_API_KEY = "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";
  async function generateImages() {
    setRobot(drawing);
    setIsClick(true);
    setIsLoading(true);
    //abc
    try {
      setGeneratedImages(drawing);
      const requestData = {
        prompt: prompt,
        n: 2,
        size: "256x256", // Set the desired image size here
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      };

      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        requestData,
        {
          headers: headers,
        }
      );
      console.log(response.data.data[0].url);
      setGeneratedImages(response.data.data[0].url);
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      // setIsLoading(false);
    }
  }
  const [robot, setRobot] = useState(draw);
  const [isClick, setIsClick] = useState(false);
  console.log(prompt);
  return (
    <div
      className="ai-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="ai-page__left">
        <h1>Generate Your Inspiration With AI</h1>
        <Input
          onChange={(e) => setPrompt(e.target.value)}
          style={{ height: "4em", objectFit: "cover" }}
          placeholder="Put your idea here"
        />
        <div className="ai-page__left__bottom">
          <Button onClick={generateImages}>
            {isLoading ? "Generating..." : "Generate"}
          </Button>
        </div>
      </div>
      <div className="ai-page__right">
        {!isClick && <img src={robot}></img>}
        {isClick ? (
          <ImgPreview
            width="100%"
            src={generatedImages}
            style={{ objectFit: "cover" }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default AIPage;
