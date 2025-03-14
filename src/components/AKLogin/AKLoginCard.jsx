import React from "react";
import PropTypes from "prop-types";
import "./AKLoginCard.css";

const AKLoginCard = ({
  title,
  bgColor,
  shadowColor,
  borderColor,
  emailPlaceholder,
  passwordPlaceholder,
  buttonText,
  buttonColor,
  textColor,
  onSubmit,
}) => {
  return (
    <div
      className="login-card"
      style={{
        background: bgColor,
        boxShadow: `0px 5px 0px ${shadowColor}`,
        border: `2px solid ${borderColor}`,
        color: textColor,
      }}
    >
      <h2>{title}</h2>
      <input type="email" placeholder={emailPlaceholder} style={{ border: `2px solid ${borderColor}` }} />
      <input type="password" placeholder={passwordPlaceholder} style={{ border: `2px solid ${borderColor}` }} />
      <button className="login-button" onClick={onSubmit} style={{ backgroundColor: buttonColor }}>
        {buttonText}
      </button>
    </div>
  );
};

AKLoginCard.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderColor: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  onSubmit: PropTypes.func,
};

AKLoginCard.defaultProps = {
  title: "Sign In",
  bgColor: "#ffffff",
  shadowColor: "#191919",
  borderColor: "black",
  emailPlaceholder: "Email",
  passwordPlaceholder: "Password",
  buttonText: "Login",
  buttonColor: "#f57ac1",
  textColor: "#000000",
  onSubmit: () => alert("Login clicked!"),
};

export default AKLoginCard;
