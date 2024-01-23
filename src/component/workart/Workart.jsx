import React from "react";
import Info from "./Info";
import "./styles.scss";

function Workart() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/userupload/12197617/file/original-4912a7b8b2c18e700a181d8aba4e6701.jpg?resize=752x')",
        }}
        className="workart-card"
      />
      <Info />
    </>
  );
}

export default Workart;
