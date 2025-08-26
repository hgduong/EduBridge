import React, { useState, useEffect } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import axios from "axios";
import ProfileView from "../../components/common/ProfileView";
import EditProfile from "../../components/common/EditProfile";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const { Content, Sider } = Layout;

const items2 = [
  {
    key: "sub1",
    icon: <UserOutlined />,
    label: "Thông tin cá nhân",
    children: [
      { key: "1", label: "Hồ sơ cá nhân" },
      { key: "2", label: "Chỉnh sửa hồ sơ" },
      { key: "3", label: "Đổi mật khẩu" },
    ],
  },
  {
    key: "sub2",
    icon: <LaptopOutlined />,
    label: "Yêu cầu gia sư",
    children: [
      { key: "4", label: "Tạo yêu cầu mới" },
      { key: "5", label: "Danh sách yêu cầu" },
      { key: "6", label: "Trạng thái yêu cầu" },
    ],
  },
  {
    key: "sub3",
    icon: <NotificationOutlined />,
    label: "Thông báo & hỗ trợ",
    children: [
      { key: "7", label: "Thông báo hệ thống" },
      { key: "8", label: "Liên hệ hỗ trợ" },
    ],
  },
];

const App = () => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [userInfo, setUserInfo] = useState(null);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (!storedUser || !token) return;

      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/auth/users/${storedUser.role}/${storedUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserInfo(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin người dùng:", err);
      }
    };

    fetchUserInfo();
  }, []);

  const renderContent = () => {
    if (!userInfo) return <div>⏳ Đang tải thông tin người dùng...</div>;

    switch (selectedKey) {
      case "1":
        return <ProfileView user={userInfo} />;
      case "2":
        return <EditProfile user={userInfo} />;
      case "3":
        return <div>🔒 Đổi mật khẩu (chưa làm)</div>;
      default:
        return <div>📄 Vui lòng chọn một mục từ menu</div>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ background: colorBgContainer }} width={240}>
        <Menu
          mode="inline"
          defaultOpenKeys={["sub1"]}
          selectedKeys={[selectedKey]}
          style={{ height: "100%" }}
          items={items2}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout
        style={{
          padding: "24px",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
