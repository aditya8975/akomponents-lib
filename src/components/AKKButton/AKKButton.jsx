import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AKKButton.css";

const AKKButton = ({
  label,
  variant,
  size,
  bgColor,
  textColor,
  shadowColor,
  borderRadius,
  hoverEffect,
  onClick,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <button
      className={`fancy-button ${variant} ${size} ${isPressed ? "pressed" : ""}`}
      style={{
        background: bgColor,
        color: textColor,
        boxShadow: `5px 5px 15px ${shadowColor}, -5px -5px 15px rgba(255, 255, 255, 0.2)`,
        borderRadius: borderRadius,
        transition: hoverEffect ? "all 0.2s ease-in-out" : "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

AKKButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "glow"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.string,
  hoverEffect: PropTypes.bool,
  onClick: PropTypes.func,
};

AKKButton.defaultProps = {
  label: "Click Me",
  variant: "primary",
  size: "medium",
  bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
  textColor: "#ffffff",
  shadowColor: "rgba(0, 0, 0, 0.2)",
  borderRadius: "12px",
  hoverEffect: true,
  onClick: () => alert("Button clicked!"),
};

export default AKKButton;
