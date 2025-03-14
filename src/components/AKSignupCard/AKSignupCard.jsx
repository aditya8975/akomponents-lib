import React from "react";
import PropTypes from "prop-types";
import AKInput from "../AKInput/AKInput.jsx";
import AKButton from "../AKButton/AKButton.jsx";
import "./AKSignupCard.css";

const AKSignupCard = ({
  title,
  bgColor,
  shadowColor,
  borderColor,
  buttonText,
  buttonColor,
  inputBorderColor,
  textColor,
  onSubmit,
}) => {
  return (
    <div
      className="ak-signup-card"
      style={{
        background: bgColor,
        boxShadow: `0px 5px 0px ${shadowColor}`,
        border: `2px solid ${borderColor}`,
        color: textColor,
      }}
    >
      <h2>{title}</h2>
      <AKInput type="text" placeholder="Full Name" borderColor={inputBorderColor} />
      <AKInput type="email" placeholder="Email" borderColor={inputBorderColor} />
      <AKInput type="password" placeholder="Password" borderColor={inputBorderColor} />
      <AKButton label={buttonText} onClick={onSubmit} bgColor={buttonColor} />
    </div>
  );
};

AKSignupCard.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  inputBorderColor: PropTypes.string,
  textColor: PropTypes.string,
  onSubmit: PropTypes.func,
};

AKSignupCard.defaultProps = {
  title: "Create Account",
  bgColor: "#ffffff",
  shadowColor: "#191919",
  borderColor: "black",
  buttonText: "Sign Up",
  buttonColor: "#f57ac1",
  inputBorderColor: "black",
  textColor: "#000000",
  onSubmit: () => alert("Sign-up clicked!"),
};

export default AKSignupCard;
