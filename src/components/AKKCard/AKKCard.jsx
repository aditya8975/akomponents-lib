import React from "react";
import PropTypes from "prop-types";
import "./AKKCard.css";

const AKKCard = ({
  title,
  content,
  imgSrc,
  bgColor,
  shadowColor,
  borderColor,
  borderRadius,
  textColor,
  buttonText,
  onClick,
}) => {
  return (
    <div
      className="akk-card"
      style={{
        backgroundColor: bgColor,
        boxShadow: `3px 3px 15px ${shadowColor}`,
        border: `2px solid ${borderColor}`,
        borderRadius: borderRadius,
        color: textColor,
      }}
    >
      {imgSrc && <img src={imgSrc} alt="img" className="akk-card-image" />}
      <h3 className="akk-card-title">{title}</h3>
      <p className="akk-card-content">{content}</p>
      {buttonText && (
        <button className="akk-card-button" onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

AKKCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  textColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

AKKCard.defaultProps = {
  title: "Default Card Title",
  content: "This is a customizable card component with improved styling.",
  imgSrc: "https://via.placeholder.com/300x180",
  bgColor: "#ffffff",
  shadowColor: "rgba(0, 0, 0, 0.15)",
  borderColor: "#ddd",
  borderRadius: "14px",
  textColor: "#333",
  buttonText: "Learn More",
  onClick: () => alert("Card button clicked!"),
};

export default AKKCard;
