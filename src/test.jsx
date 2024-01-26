import React, { useEffect, useState } from "react";
import uploadFile from "./assets/hook/useUpload";
import UploadImg from "./assets/UploadImg/UploadImg";
import { Link } from "react-router-dom";
import api from "./config/axios";

function Test() {
  const [file, setFile] = useState({});
  const [URL, setURL] = useState("");
  const [data, setData] = useState([]);
  const getLink = async () => {
    console.log(file);
    let URL = await uploadFile(file);
    setURL(URL);
  };

  useEffect(() => {
    getLink();

    const getAll = async () => {
      const response = await api.get("/artworks");
      console.log(response.data.data);
      setData(response.data.data);
    };

    getAll();
  }, []);

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
        {data.map((data) => {
          return (
            <>
              <h1 key={data.id}>{data.name}</h1>;
              <img src={data.image} alt="" />;
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Test;
