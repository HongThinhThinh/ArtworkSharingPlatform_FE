import {
  FileExclamationOutlined,
  SolutionOutlined,
  StockOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
export const navDashboardConfig = [
  {
    key: "1",
    icon: <StockOutlined />,
    label: "Overview",
  },
  {
    key: "2",
    icon: <FaMoneyBillTransfer style={{ fontSize: "1.8em" }} />,
    label: "Transaction",
  },
  {
    key: "3",
    icon: <TeamOutlined />,
    label: "Users",
    children: [
      {
        key: "31",
        label: "Modes",
      },
      {
        key: "32",
        label: "Creators",
      },
      {
        key: "33",
        label: "Audiences",
      },
    ],
  },
  {
    key: "4",
    icon: <SolutionOutlined />,
    label: "Posts",
  },
  {
    key: "5",
    icon: <FileExclamationOutlined />,
    label: "Reported Posts",
  },
  {
    key: "6",
    icon: <TbCategory2 />,
    label: "Categories",
  },
];

export const navpath = {
  1: {
    path: "/dashboard/overview",
  },
  31: {
    path: "/dashboard/modes",
  },
  32: {
    path: "/dashboard/creators",
  },
  33: {
    path: "/dashboard/audiences",
  },
  4: {
    path: "/dashboard/posts",
  },
  5: {
    path: "/dashboard/reported-posts",
  },
  6: {
    path: "/dashboard/categories",
  },
  2: {
    path: "/dashboard/view-transaction",
  },
};

export default navDashboardConfig;
