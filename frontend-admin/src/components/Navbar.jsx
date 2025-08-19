// components/Navbar.jsx
import React from "react";
import { Switch, Input } from "antd";
import { BellOutlined, SearchOutlined,UserOutlined } from "@ant-design/icons";

const Navbar = ({ theme, onToggleTheme, onSearch }) => {
  const isDark = theme === "dark";

  return (
    <div
      style={{
        height: "40px",
        width: "auto%",
        backgroundColor: isDark ? "#1f1f1f" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        borderBottom: isDark ? "1px solid #333" : "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Search box */}
      <Input
        placeholder="Tìm kiếm..."
        prefix={<SearchOutlined />}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          width: 300,
          height:" 25px",
          backgroundColor: isDark ? "#333" : "#f5f5f5",
          color: isDark ? "#fff" : "#000",
        }}
      />

      {/* Theme switch */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <BellOutlined />
        <Switch checked={isDark} onChange={onToggleTheme} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{border:"1px solid black",borderRadius: "50%"}}>

          <UserOutlined style={{ fontSize: "20px" }} />
            </div>
          <span style={{ fontSize: "0.875rem" }}>Your Name</span>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
