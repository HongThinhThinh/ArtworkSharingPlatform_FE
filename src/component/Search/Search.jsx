import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const prefix = <SearchOutlined style={{ color: "grey", fontSize: "1.4em" }} />;
const StyledSearch = () => (
  <Input
    className="search"
    placeholder="Search..."
    variant="borderLess"
    prefix={prefix}
    style={{ fontSize: "1em", fontFamily: "SemiBoldMonaSans" }}
  />
);
export default StyledSearch;
