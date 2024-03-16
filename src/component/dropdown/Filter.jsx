import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
import { TbPremiumRights } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { TiTick } from "react-icons/ti";
function Filter({ setStatus }) {
  const [selected, setSelected] = useState("Filter");

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e.key);
    setStatus(e.key)
    setSelected(e.key);
  };
  const items = [
    {
      label: "Reject",
      key: "reject",
      icon: <FcCancel />,
    },
    {
      label: "Pending",
      key: "pending",
      icon: <MdOutlinePendingActions />,
      info: true,
    },
    {
      label: "Active",
      key: "active",
      icon: <TiTick />,
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
