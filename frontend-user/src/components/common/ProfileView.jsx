import React from "react";
import "../../assets/styles/ProfileView.css"; // CSS riêng nếu có

const ProfileView = ({ user }) => {
  if (!user) return <p>Không có thông tin người dùng.</p>;

  const isTutor = user.role === "tutor";
  const isStudent = user.role === "student";

  return (
    <div
      className="profile-container"
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: 24 }}>👤 Thông tin người dùng</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <p>
          <strong>🧑 Họ tên:</strong> {user.full_name}
        </p>
        <p>
          <strong>📧 Email:</strong> {user.email}
        </p>
        <p>
          <strong>🔐 Vai trò:</strong> {user.role}
        </p>
        <p>
          <strong>🆔 ID:</strong> {user._id}
        </p>
        <p>
          <strong>📞 Số điện thoại:</strong> {user.phone_number}
        </p>
        <p>
          <strong>👫 Giới tính:</strong> {user.gender}
        </p>
        <p style={{ gridColumn: "span 2" }}>
          <strong>📍 Địa chỉ:</strong> {user.address}
        </p>
      </div>

      {isTutor && (
        <>
          <hr style={{ margin: "24px 0" }} />
          <h3>🎓 Thông tin gia sư</h3>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <p>
              <strong>📚 Chuyên môn:</strong> {user.major}
            </p>
            <p>
              <strong>⏳ Kinh nghiệm:</strong> {user.experience} năm
            </p>
            <p style={{ gridColumn: "span 2" }}>
              <strong>📄 Chứng chỉ:</strong> {user.certificate}
            </p>
          </div>
        </>
      )}

      {isStudent && (
        <>
          <hr style={{ margin: "24px 0" }} />
          <h3>🏫 Thông tin học sinh</h3>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <p>
              <strong>🏫 Trường:</strong> {user.school}
            </p>
            <p>
              <strong>📘 Lớp:</strong> {user.class}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileView;
