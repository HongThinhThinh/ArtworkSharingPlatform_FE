import { AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import "./CategorySelector.scss";
import { CloseOutlined } from "@ant-design/icons";
import api from "../../config/axios";
import { alertFail } from "../../assets/hook/useNotification";

const imageCategories = [
  "Nature",
  "Animals",
  "Abstract",
  "Cityscapes",
  "Landscapes",
  "Portraits",
  "Architecture",
  "Food and Drink",
  "Travel",
  "Fashion",
];

function CategorySelector({ selectedCategories, setSelectedCategories }) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/creatorCategorys");
        const names = response.data.data.map((item) => item.name);
        const name2 = [...names];
        setData(name2);
      } catch (error) {
        alertFail("Error fetching categories:", error);
      }
    };

    fetch();
  }, []);

  const getPanelValue = (searchText) => {
    if (!searchText) return [];

    const filteredOptions = data.filter(
      (item) =>
        item.toLowerCase().includes(searchText.toLowerCase()) &&
        !selectedCategories.includes(item)
    );

    return filteredOptions.map((item) => ({
      label: item,
      value: item,
    }));
  };

  const onChange = (data) => {
    setValue(data);
  };

  const handleDelete = (option) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== option));
  };

  const onSelect = (data) => {
    setSelectedCategories([...selectedCategories, data]);
    console.log(selectedCategories);
    setValue("");
    setOptions([]);
  };
  return (
    <div className="category-sellector">
      <AutoComplete
        className="category-sellector__search"
        options={options}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="Search by categories"
        onChange={onChange}
        value={value}
      />
      <div className="category-sellector__categories">
        {selectedCategories.map((item) => (
          <div className="category-sellector__categories__item">
            {item}{" "}
            <CloseOutlined
              style={{ fontSize: "0.7em", color: "grey" }}
              onClick={() => handleDelete(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySelector;
