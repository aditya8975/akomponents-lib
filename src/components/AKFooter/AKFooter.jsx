import React from "react";
import PropTypes from "prop-types";
import "./AKFooter.css";

const AKFooter = ({ About ,links, socialLinks, bgColor, textColor,bottomF }) => {
  return (
    <footer className="akk-footer" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>{About}</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} style={{ color: textColor }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="social-link" target="_blank" rel="noopener noreferrer">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{bottomF}</p>
      </div>
    </footer>
  );
};

AKFooter.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired, // FontAwesome class name
      href: PropTypes.string.isRequired,
    })
  ),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
About: PropTypes.string,
bottomF:PropTypes.string
  
};

AKFooter.defaultProps = {
  links: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ],
  socialLinks: [
    { icon: "fab fa-facebook-f", href: "https://facebook.com" },
    { icon: "fab fa-twitter", href: "https://twitter.com" },
    { icon: "fab fa-instagram", href: "https://instagram.com" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
  ],
  bgColor: "#222",
  textColor: "#fff",
  About:"I m Aditya Katare",
  bottomF:"@2025 Made By Aditya"
};

export default AKFooter;
