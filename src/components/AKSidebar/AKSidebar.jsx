import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./AKSidebar.css";

const AKSidebar = ({ links, bgColor, textColor }) => {
  // Dynamically set CSS variables for styling
  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-bg", bgColor);
    document.documentElement.style.setProperty("--sidebar-text", textColor);
  }, [bgColor, textColor]);

  return (
    <aside className="akk-sidebar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              <i className={link.icon}></i>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

AKSidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string, // FontAwesome class name
    })
  ),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

AKSidebar.defaultProps = {
  links: [
    { label: "Dashboard", href: "#", icon: "fas fa-home" },
    { label: "Settings", href: "#", icon: "fas fa-cog" },
    { label: "Profile", href: "#", icon: "fas fa-user" },
    { label: "Logout", href: "#", icon: "fas fa-sign-out-alt" },
  ],
  bgColor: "#2c3e50",
  textColor: "#fff",
};

export default AKSidebar;
