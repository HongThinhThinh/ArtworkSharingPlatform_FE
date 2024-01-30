import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import "./Search.scss";

function StyledSearch() {
  const prefix = (
    <SearchOutlined
      style={{ color: "grey", fontSize: "1.3em", paddingRight: "0.2em" }}
      onClick={() => {
        setIsopen(!isOpen);
      }}
    />
  );
  const prefixIsMobile = (
    <SearchOutlined
      style={{ color: "black", fontSize: "1.3em", paddingRight: "0.2em" }}
      onClick={() => {
        setIsopen(!isOpen);
      }}
    />
  );
  const [isOpen, setIsopen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <Input
      placeholder="Search..."
      variant="borderLess"
      prefix={isMobile ? prefixIsMobile : prefix}
      className={`search ${isOpen ? "active" : ""}`}
    />
  );
}
export default StyledSearch;
