import React from "react";
import PropTypes from "prop-types";
import "./AKButton.css";

const AKButton = ({ label, title, bgColor, textColor, hoverColor, onClick, variant }) => {
  return (
    <button
      className={`custom-button ${variant}`}
      title={title} // Tooltip on hover
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = hoverColor)} // Hover effect
      onMouseOut={(e) => (e.target.style.backgroundColor = bgColor)} // Reset color on mouse out
    >
      {label}
    </button>
  );
};

AKButton.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

AKButton.defaultProps = {
  title: "Click here",
  bgColor: "#007bff", // Default blue
  textColor: "#ffffff",
  hoverColor: "#0056b3", // Darker blue on hover
  variant: "primary",
};

export default AKButton;
