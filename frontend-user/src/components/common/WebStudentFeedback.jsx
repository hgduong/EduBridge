import React from "react";

const WebStudentFeedback = ({ name, feedback, rating, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.avatar} />
      <div style={styles.content}>
        <div style={styles.header}>
          <span style={styles.name}>{name}</span>
          <span style={styles.stars}>
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>
        </div>
        <p style={styles.feedback}>{feedback}</p>
      </div>
    </div>
  );
};

export default WebStudentFeedback;

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "var(--color-bluee1f4ff)",
    borderRadius: "16px",
    maxWidth: "500px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    margin: "22px 0",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "12px",
    objectFit: "cover",
    marginRight: "16px",
  },
  content: {
    flex: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "var(--color-black)",
  },
  stars: {
    color: "var(--color-yellowf6b737)",
    fontSize: "16px",
    paddingRight: "16px",
  },
  feedback: {
    fontSize: "14px",
    color: "var(--color-black)",
    lineHeight: "1.4",
    paddingTop: "4px",
    textAlign: "start",
    alignItems: "start",
    display: "flex",
  },
};
