import React from "react";
import AKFooter from "./AKFooter";

export default {
  title: "Components/AKFooter",
  component: AKFooter,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <AKFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
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
