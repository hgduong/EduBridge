import React from "react";
import { Menu, Switch } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  PullRequestOutlined,
  FileTextOutlined,
  BarChartOutlined,
  HeatMapOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.png";

const Sidebar = ({ onToggleTheme }) => {
  const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "user", icon: <UserOutlined />, label: "User" },
    { key: "requirement", icon: <PullRequestOutlined />, label: "Requirement" },
    { key: "blog", icon: <FileTextOutlined />, label: "Blog" },
    { key: "revenue", icon: <BarChartOutlined />, label: "Revenue Report" },
    { key: "maps", icon: <HeatMapOutlined />, label: "Maps" },
    { key: "block", icon: <UnlockOutlined />, label: "Block" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: 200,
        backgroundColor: "#001529",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <img
            src={logo}
            alt="Edubridge Logo"
            style={{ width: "70px", height: "auto", borderRadius: "50%" }}
          />
          <div style={{ color: "white", marginTop: "0.5rem" }}>Edu Bridge</div>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={["dashboard"]}
          items={menuItems}
        />
      </div>

      {/* Switch Theme */}
      <div style={{ padding: "1rem", textAlign: "center", color: "white" }}>
        <span style={{ marginRight: "0.5rem" }}>Dark Mode</span>
        <Switch onChange={onToggleTheme} />
      </div>
    </div>
  );
};

export default Sidebar;
