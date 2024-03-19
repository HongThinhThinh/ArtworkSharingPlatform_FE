import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchDashboard.scss";

function SearchDashboard() {
  const prefix = (
    <SearchOutlined
      style={{ color: "grey", fontSize: "1.3em", paddingRight: "0.2em" }}
      onClick={() => {
        setIsopen(!isOpen);
      }}
    />
  );
  const [isOpen, setIsopen] = useState(false);
  return (
    <Input
      variant="borderLess"
      prefix={prefix}
      className={`search-dashboard ${isOpen ? "active" : ""}`}
    />
  );
}
export default SearchDashboard;
