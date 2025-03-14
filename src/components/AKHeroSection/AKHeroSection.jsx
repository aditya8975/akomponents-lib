import React from "react";
import PropTypes from "prop-types";
import "./AKHeroSection.css";

const AKHeroSection = ({ title, subtitle, bgColor, textColor }) => {
  return (
    <section className="akk-hero" style={{ backgroundColor: bgColor, color: textColor }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

AKHeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

AKHeroSection.defaultProps = {
  title: "Welcome to My Website",
  subtitle: "This is a customizable hero section.",
  bgColor: "#f8f9fa",
  textColor: "#000",
};

export default AKHeroSection;
