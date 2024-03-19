import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

function StyledSearch() {
  const navigate = useNavigate();
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
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     navigate(`search?search=${search}`)
      
    }
  };
  const [search,setSearch] = useState("");
  const [isOpen, setIsopen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  console.log(search)
  return (
    <Input
      placeholder="Search..."
      variant="borderLess"
      prefix={isMobile ? prefixIsMobile : prefix}
      className={`search ${isOpen ? "active" : ""}`}
      onInput={(e) => setSearch(e.target.value)}
      onKeyPress={handleKeyPress}
      
    />
  );
}
export default StyledSearch;
