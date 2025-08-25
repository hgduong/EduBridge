import React, { useState } from "react";

const AppButton = ({
  icon,
  text,
  width = "auto",
  height = "auto",
  borderRadius = "8px",
  borderSize = "1px",
  borderColor = "#000",
  backgroundColor = "#fff",
  hoverBackgroundColor = "#000",
  textColor = "#000",
  hoverTextColor = "#fff",
  hoverBorderColor = "#000",
  padding = "8px 16px",
  onClick,
  style = {},
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width,
        height,
        borderRadius,
        border: `${borderSize} solid ${hover ? hoverBorderColor : borderColor}`,
        backgroundColor: hover ? hoverBackgroundColor : backgroundColor,
        color: hover ? hoverTextColor : textColor,
        padding,
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: 500,
        transition: "all 0.3s", // hiệu ứng chuyển màu mượt
        ...style,
      }}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default AppButton;