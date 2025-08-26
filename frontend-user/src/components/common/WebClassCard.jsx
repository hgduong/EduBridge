import React from "react";
import WebButton from "./WebButton";

const WebClassCard = ({
  teacherName,
  subject,
  schedule,
  method,
  location,
  studentCount,
  studentGender,
  teacherAvatar,
  status,
  startDate,
  endDate,
  process,
  price,
  detailLink, // link trang chi tiết
}) => {
  return (
    <div style={styles.card}>
      <span
        style={{
          ...styles.status,
          backgroundColor:
            status === "Còn"
              ? "var(--color-primary)"
              : "var(--color-redff3131)",
        }}
      >
        {status}
      </span>

      <img src={teacherAvatar} alt={teacherName} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{teacherName}</h3>
        <p>• Môn học: <b>{subject}</b></p>
        <p>• Lịch học: <b>{schedule}</b></p>
        <p>• Phương thức: <b>{method}</b></p>
        <p>• Địa điểm: <b>{location}</b></p>
        <p>• Lượng học viên: <b>{studentCount}</b></p>
        <p>• Giới tính học viên: <b>{studentGender}</b></p>
        <p>• Ngày khai giảng: <b>{startDate}</b></p>
        <p>• Ngày kết thúc: <b>{endDate}</b></p>
        <p>• Lộ trình: <b>{process}</b></p>
        <p>• Giá khóa học: <b>{price}</b></p>

        {/* Link chi tiết + nút trên cùng 1 row */}
        <div style={styles.footer}>
          <a href={detailLink} style={styles.link}>
            Xem chi tiết
          </a>
          <WebButton
            text="Tham gia ngay"
            width="220px"
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

export default WebClassCard;

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    fontSize: "14px",
    fontWeight: "500",
    color: "var(--color-secondary)",
    textDecoration: "underline",
    cursor: "pointer",
    fontStyle: "italic",
  },
};
