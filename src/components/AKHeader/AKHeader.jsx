import React from "react";
import PropTypes from "prop-types";
import "./AKHeader.css";

const AKHeader = ({ title, bgColor, textColor }) => {
  return (
    <header className="akk-header" style={{ backgroundColor: bgColor, color: textColor }}>
      <h1>{title}</h1>
    </header>
  );
};

AKHeader.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

AKHeader.defaultProps = {
  title: "My Website",
  bgColor: "#333",
  textColor: "#fff",
};

export default AKHeader;
