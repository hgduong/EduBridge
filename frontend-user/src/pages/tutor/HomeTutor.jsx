import React from "react";
import { Link } from "react-router-dom";

const HomeTutor = () => {
  return (
    <div style={{ padding: 48, minHeight: "60vh" }}>
      <h2>Dành cho gia sư</h2>
      <p>
        Trang giới thiệu chương trình, hướng dẫn đăng ký và quản lý lớp cho gia
        sư.
      </p>

      {/* Điều hướng nhanh */}
      <nav style={{ marginTop: 24 }}>
        <h3>Điều hướng nhanh</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li>
            <Link to="/">🏠 Trang chính</Link>
          </li>
          <li>
            {/* Nếu muốn cuộn xuống section search trong Home */}
            <Link to="/searchtutor">🔍 Tìm kiếm lớp học</Link>
          </li>
          <li>
            <Link to="/find-student-form">📝 Tạo yêu cầu mở lớp học</Link>
          </li>
          <li>
            <Link to="/login">🔑 Đăng nhập</Link>
          </li>
          <li>
            <Link to="/guide">📘 Hướng dẫn</Link>
          </li>
          <li>
            <Link to="/policy">📜 Chính sách</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeTutor;
