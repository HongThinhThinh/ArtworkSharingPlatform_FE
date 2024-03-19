import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchDashboard.scss";
import { useNavigate } from "react-router-dom";

function SearchDashboard() {
  const navigate = useNavigate();
  const prefix = (
    <SearchOutlined
      style={{ color: "grey", fontSize: "1.3em", paddingRight: "0.2em" }}
      onClick={() => {
        setIsopen(!isOpen);
      }}
    />
  );
  const [isOpen, setIsopen] = useState(false);
  const [search,setSearch] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     navigate(`search?search=${search}`)
      
    }
  };
  return (
    <Input
      variant="borderLess"
      prefix={prefix}
      className={`search-dashboard ${isOpen ? "active" : ""}`}
      onInput={(e) => setSearch(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}
export default SearchDashboard;
