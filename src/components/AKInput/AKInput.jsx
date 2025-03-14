import React from "react";
import PropTypes from "prop-types";
import "./AKInput.css";

const AKInput = ({ type, placeholder }) => {
  return <input className="ak-input" type={type} placeholder={placeholder} />;
};

AKInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AKInput;
