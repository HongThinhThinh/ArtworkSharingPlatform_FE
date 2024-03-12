import React from "react";
import { Watermark } from "antd";
import ImgPreview from "../../pages/Image/Image";
const WatermarkArtwork = () => (
  <Watermark
    height={30}
    width={130}
    content="Ant Design"
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div
      style={{
        height: 500,
      }}
    >
      <img
        width={"500px"}
        height={"500px"}
        src="https://firebasestorage.googleapis.com/v0/b/swp-asp.appspot.com/o/IMG_7997.jpeg?alt=media&token=a3787d13-6be1-4aa9-8b28-79746cb16040"
      />
    </div>
  </Watermark>
);
export default WatermarkArtwork;
