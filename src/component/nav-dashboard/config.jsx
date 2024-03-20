import {
  FileExclamationOutlined,
  SolutionOutlined,
  StockOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export const navDashboardConfig = [
  {
    key: "1",
    icon: <StockOutlined />,
    label: "Overview",
  },
  {
    key: "2",
    icon: <TeamOutlined />,
    label: "Users",
    children: [
      {
        key: "21",
        label: "Modes",
      },
      {
        key: "22",
        label: "Creators",
      },
      {
        key: "23",
        label: "Audiences",
      },
    ],
  },
  {
    key: "3",
    icon: <SolutionOutlined />,
    label: "Posts",
  },
  {
    key: "4",
    icon: <FileExclamationOutlined />,
    label: "Reported Posts",
  },
  {
    key: "5",
    icon: <FaMoneyBillTransfer style={{fontSize:"1.8em"}}/>,
    label: "Transaction",
  },
];

export const navpath = {
  1: {
    path: "/dashboard/overview",
  },
  21: {
    path: "/dashboard/modes",
  },
  22: {
    path: "/dashboard/creators",
  },
  23: {
    path: "/dashboard/audiences",
  },
  3: {
    path: "/dashboard/posts",
  },
  4: {
    path: "/dashboard/reported-posts",
  },
  5: {
    path: "/dashboard/view-transaction",
  },
};

export default navDashboardConfig;
