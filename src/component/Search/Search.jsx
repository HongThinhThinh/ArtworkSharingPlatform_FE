import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const prefix = (
  <SearchOutlined
    style={{ color: "grey", fontSize: "1.3em", paddingRight: "0.2em" }}
  />
);
function StyledSearch() {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return !isMobile ? (
    <Input
      className="search"
      placeholder="Search..."
      variant="borderLess"
      prefix={prefix}
      style={{
        fontSize: "1.075em",
        fontFamily: "SemiBoldMonaSans !important",
        backgroundColor: "white",
        borderRadius: "100px",
        padding: "13px 18px",
      }}
    />
  ) : (
    <SearchOutlined />
  );
}
export default StyledSearch;
