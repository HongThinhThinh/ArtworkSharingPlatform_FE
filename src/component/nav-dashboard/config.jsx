import {
  FileExclamationOutlined,
  SolutionOutlined,
  StockOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const navDashboardConfig = [
  {
    icon: <StockOutlined />,
    title: "Overview",
    path: "/dashboard",
  },
  {
    icon: <UserOutlined />,
    title: "Mode",
    path: "/dashboard/mode",
  },
  {
    icon: <TeamOutlined />,
    title: "Users",
    path: "/dashboard/users",
  },
  {
    icon: <SolutionOutlined />,
    title: "Posts",
    path: "/dashboard/posts",
  },
  {
    icon: <FileExclamationOutlined />,
    title: "Reported Posts",
    path: "/dashboard/reported-posts",
  },
];

export default navDashboardConfig;
