import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AKLoginCard.css";

const AKKLogin = ({
  logoSrc,
  usernameLabel,
  passwordLabel,
  buttonText,
  forgotPasswordText,
  signupText,
  togglePasswordIcons,
  bgColor,
  shadowColor,
  borderColor,
  buttonColor,
  textColor,
  linkColor,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="akk-auth-card"
      style={{
        backgroundColor: bgColor,
        boxShadow: `0px 4px 20px ${shadowColor}`,
        border: `2px solid ${borderColor}`,
      }}
    >
      <div className="akk-auth-card-left">
        <img src={logoSrc} alt="Logo" className="akk-auth-logo" />
      </div>
      <div className="akk-auth-card-right">
        <h2 style={{ color: textColor }}>Login</h2>
        <div className="input-group">
          <label style={{ color: textColor }}>{usernameLabel}</label>
          <input type="text" placeholder="Enter username" style={{ border: `1px solid ${borderColor}` }} />
        </div>
        <div className="input-group">
          <label style={{ color: textColor }}>{passwordLabel}</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              style={{ border: `1px solid ${borderColor}` }}
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? togglePasswordIcons.open : togglePasswordIcons.closed}
            </span>
          </div>
        </div>
        <button className="akk-auth-button" onClick={onSubmit} style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </button>
        <div className="akk-auth-links">
          <a href="#" style={{ color: linkColor }}>{forgotPasswordText}</a>
          <a href="#" style={{ color: linkColor }}>{signupText}</a>
        </div>
      </div>
    </div>
  );
};

AKKLogin.propTypes = {
  logoSrc: PropTypes.string,
  usernameLabel: PropTypes.string,
  passwordLabel: PropTypes.string,
  buttonText: PropTypes.string,
  forgotPasswordText: PropTypes.string,
  signupText: PropTypes.string,
  togglePasswordIcons: PropTypes.shape({
    open: PropTypes.node,
    closed: PropTypes.node,
  }),
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
  borderColor: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  linkColor: PropTypes.string,
  onSubmit: PropTypes.func,
};

AKKLogin.defaultProps = {
  logoSrc: "/logo.png",
  usernameLabel: "Username",
  passwordLabel: "Password",
  buttonText: "Login",
  forgotPasswordText: "Forgot Password?",
  signupText: "Sign Up",
  togglePasswordIcons: { open: "👁️", closed: "🔒" },
  bgColor: "#ffffff",
  shadowColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "#ddd",
  buttonColor: "#2575fc",
  textColor: "#333",
  linkColor: "#2575fc",
  onSubmit: () => alert("Login clicked!"),
};

export default AKKLogin;
