import React, { useState } from "react";

const mockRequests = [
  {
    id: 1,
    name: "Thầy Nam",
    subject: "Toán lớp 9",
    location: "Cầu Giấy, Hà Nội",
    description: "Cần học sinh ôn thi vào lớp 10, học tối thứ 3 và thứ 6.",
  },
  {
    id: 2,
    name: "Cô Hương",
    subject: "Tiếng Anh lớp 6",
    location: "Thanh Xuân, Hà Nội",
    description: "Dạy giao tiếp cơ bản, học online qua Zoom.",
  },
  {
    id: 3,
    name: "Thầy Quang",
    subject: "Lý lớp 11",
    location: "Đống Đa, Hà Nội",
    description: "Luyện thi học sinh giỏi, cần học sinh có nền tảng.",
  },
];

const StudentPage = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(mockRequests);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = search.toLowerCase();
    const results = mockRequests.filter(
      (req) =>
        req.subject.toLowerCase().includes(keyword) ||
        req.location.toLowerCase().includes(keyword)
    );
    setFiltered(results);
  };

  return (
    <div style={{ padding: 48, minHeight: "60vh" }}>
      <h2>Dành cho học viên</h2>
      <p>Trang giới thiệu chương trình, hướng dẫn đăng ký và tìm gia sư.</p>

      {/* Form tìm kiếm */}
      <form onSubmit={handleSearch} style={{ marginBottom: 32 }}>
        <input
          type="text"
          placeholder="Tìm theo môn học, địa chỉ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px 16px",
            width: "300px",
            marginRight: "12px",
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Tìm kiếm
        </button>
      </form>

      {/* Danh sách yêu cầu của gia sư */}
      <div style={{ display: "grid", gap: 24 }}>
        {filtered.map((req) => (
          <div
            key={req.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 24,
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h3>{req.subject}</h3>
            <p><strong>Gia sư:</strong> {req.name}</p>
            <p><strong>Khu vực:</strong> {req.location}</p>
            <p>{req.description}</p>
            <button
              style={{
                marginTop: 12,
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Tham Gia
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
