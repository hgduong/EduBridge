import React from "react";

const WebPagination = ({ currentPage, totalPages, onPageChange }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "24px 0",
      gap: "12px",
    },
    button: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "2px solid var(--color-primary)",
      backgroundColor: "var(--color-white)",
      color: "var(--color-primary)",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    active: {
      backgroundColor: "var(--color-primary)",
      color: "#fff",
    },
    disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={styles.container}>
      {/* Nút Previous */}
      <button
        style={{
          ...styles.button,
          ...(currentPage === 1 ? styles.disabled : {}),
        }}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Các số trang */}
      {pages.map((page) => (
        <button
          key={page}
          style={{
            ...styles.button,
            ...(currentPage === page ? styles.active : {}),
          }}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Nút Next */}
      <button
        style={{
          ...styles.button,
          ...(currentPage === totalPages ? styles.disabled : {}),
        }}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default WebPagination;
