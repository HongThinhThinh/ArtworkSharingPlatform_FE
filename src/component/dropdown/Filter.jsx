import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
import { TbPremiumRights } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
function Filter() {
  const [selected, setSelected] = useState("Filter");

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e.key);
    setSelected(e.key);
  };
  const items = [
    {
      label: "Sort by date",
      key: "Date",
      icon: <CiCalendarDate />,
    },
    {
      label: "Sort by price",
      key: "Price",
      icon: <TbPremiumRights />,
      info: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Space wrap>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            {selected}
            <IoFilterSharp />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
}

export default Filter;
