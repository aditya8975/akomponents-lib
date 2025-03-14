import React from "react";
import PropTypes from "prop-types";
import "./AKCard.css";

const AKCard = ({ title, content, titleColor, textColor, bgColor, borderColor, hoverColor, buttonText, onClick }) => {
  return (
    <div
      className="ak-card"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `2px solid ${borderColor}`,
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      <h3 className="ak-card-title" style={{ color: titleColor }}>{title}</h3>
      <p className="ak-card-content">{content}</p>
      {buttonText && (
        <button className="ak-card-button" onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

AKCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

AKCard.defaultProps = {
  titleColor: "#333",
  textColor: "#000",
  bgColor: "#fff",
  borderColor: "#ddd",
  hoverColor: "#f5f5f5",
};

export default AKCard;
