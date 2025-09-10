import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  EditOutlined,
  BookOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "../../assets/styles/HomeTutor.css";

const HomeTutor = () => {
  const studentRequests = [
    {
      id: 1,
      subject: "Toán lớp 9",
      location: "Hà Nội",
      schedule: "Tối thứ 2, 4, 6",
      notes: "Ưu tiên gia sư có kinh nghiệm luyện thi vào 10",
    },
    {
      id: 2,
      subject: "Tiếng Anh lớp 7",
      location: "TP. Hồ Chí Minh",
      schedule: "Chiều thứ 3, 5",
      notes: "Muốn cải thiện kỹ năng nghe nói",
    },
    {
      id: 3,
      subject: "Vật lý lớp 10",
      location: "Đà Nẵng",
      schedule: "Cuối tuần",
      notes: "Học sinh cần ôn lại kiến thức cơ bản",
    },
  ];

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Trang chính</Link>,
    },
    {
      key: "search",
      icon: <SearchOutlined />,
      label: <Link to="/searchtutor">Tìm kiếm lớp học</Link>,
    },
    {
      key: "create",
      icon: <EditOutlined />,
      label: <Link to="/find-student-form">Tạo yêu cầu mở lớp học</Link>,
    },
    {
      key: "guide",
      icon: <BookOutlined />,
      label: <Link to="/guide">Hướng dẫn</Link>,
    },
    {
      key: "policy",
      icon: <FileTextOutlined />,
      label: <Link to="/policy">Chính sách</Link>,
    },
  ];

  return (
    <div className="home-tutor-layout">
      {/* Cột trái: Menu */}
      <div className="sidebar">
        <h3>📌 Điều hướng nhanh</h3>
        <Menu
          mode="inline"
          style={{ background: "transparent", border: "none" }}
          items={menuItems}
        />
      </div>

      {/* Cột phải: Danh sách yêu cầu */}
      <div className="content">
        <h3>📚 Các yêu cầu tìm gia sư</h3>
        <div className="request-grid">
          {studentRequests.map((req) => (
            <div key={req.id} className="request-card">
              <h4>{req.subject}</h4>
              <p><strong>Địa điểm:</strong> {req.location}</p>
              <p><strong>Lịch học:</strong> {req.schedule}</p>
              <p><strong>Ghi chú:</strong> {req.notes}</p>
              <Button type="primary" block style={{ marginTop: 12 }}>
                Nhận học sinh
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTutor;
