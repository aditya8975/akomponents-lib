import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./AKNavbar.css";

const AKNavbar = ({ links, bgColor, textColor }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--navbar-bg", bgColor);
  }, [bgColor]);

  return (
    <nav className="akk-navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} style={{ color: textColor }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

AKNavbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

AKNavbar.defaultProps = {
  links: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  bgColor: "#007bff",
  textColor: "#fff",
};

export default AKNavbar;
