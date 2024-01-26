import React, { useEffect, useState } from "react";
import uploadFile from "./assets/hook/useUpload";
import UploadImg from "./assets/UploadImg/UploadImg";
import { Link } from "react-router-dom";

function Test() {
  const [file, setFile] = useState({});
  const [URL, setURL] = useState("");
  const getLink = async () => {
    console.log(file);
    let URL = await uploadFile(file);
    setURL(URL);
  };

  useEffect(() => {
    getLink();
  }, [file]);
  console.log(URL);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "30px",
      }}
    >
      <h1>Test Upload IMG</h1>
      <div onChange={(e) => setFile(e.target.files[0])}>
        <UploadImg />
        <div>{URL && <a href={URL}> link ảnh của bạn đây </a>}</div>
      </div>
    </div>
  );
}

export default Test;
