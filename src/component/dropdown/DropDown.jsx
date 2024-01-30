import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
import { TbPremiumRights } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

function DropDown() {
  const [selected, setSelected] = useState("Al");

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e.key);
    setSelected(e.key);
  };
  const items = [
    {
      label: "Free",
      key: "Free",
      icon: <AiFillEye />,
    },
    {
      label: "Premium",
      key: "Premium",
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
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
}

export default DropDown;
