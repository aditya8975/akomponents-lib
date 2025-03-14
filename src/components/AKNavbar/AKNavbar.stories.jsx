import React from "react";
import AKNavbar from "./AKNavbar";

export default {
  title: "Components/AKNavbar",
  component: AKNavbar,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <AKNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Home", href: "#", icon: "fas fa-home" },
    { label: "About", href: "#", icon: "fas fa-info-circle" },
    { label: "Contact", href: "#", icon: "fas fa-envelope" },
  ],
  bgColor: "#007bff",
  textColor: "#fff",
};
