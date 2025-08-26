import React from "react";
import WebButton from "./WebButton";

const WebStudentRequestCard = ({
  name,
  subject,
  schedule,
  method,
  location,
  studentCount,
  teacherGender,
  requirement,
  image,
  status,
}) => {
  return (
    <div style={styles.card}>
      {/* Tag status */}
      <span
        style={{
          ...styles.status,
          backgroundColor: status === "Còn" ? "var(--color-primary)" : "var(--color-redff3131)",
        }}
      >
        {status}
      </span>

      <img src={image} alt={name} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{name}</h3>
        <p>• Môn học: <b>{subject}</b></p>
        <p>• Lịch học: <b>{schedule}</b></p>
        <p>• Phương thức: <b>{method}</b></p>
        <p>• Địa điểm: <b>{location}</b></p>
        <p>• Lượng học viên: <b>{studentCount}</b></p>
        <p>• Giới tính giáo viên: <b>{teacherGender}</b></p>
        <p>• <b>Yêu cầu:</b> {requirement}</p>

        <div style={{ marginTop: "20px" }}>
          <WebButton
            text="Nhận học sinh ngay"
            width="100%"
            height="48px"
            backgroundColor="var(--color-secondary)"
            textColor="var(--color-white)"
            borderColor="var(--color-secondary)"
            hoverBackgroundColor="var(--color-primary)"
            hoverTextColor="var(--color-white)"
            hoverBorderColor="var(--color-primary)"
            borderRadius="12px"
          />
        </div>
      </div>
    </div>
  );
};

export default WebStudentRequestCard;

const styles = {
  card: {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    borderRadius: "12px",
    marginBottom: "40px",
    marginRight: "24px",
    marginLeft: "24px",
    overflow: "hidden",
    backgroundColor: "var(--color-bluee1f4ff)",
  },
  status: {
    position: "absolute",
    top: "10px",
    right: "20px",
    padding: "10px 30px",
    borderRadius: "22px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
  },
  image: {
    width: "25%",
    height: "auto",
    maxHeight: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },
  title: {
    paddingBottom: "10px",
    margin: 0,
  },
  info: {
    width: "75%",
    padding: "20px",
  },
};