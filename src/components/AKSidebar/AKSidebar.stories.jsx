import React from "react";
import AKSidebar from "./AKSidebar";

export default {
  title: "Components/AKSidebar",
  component: AKSidebar,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <AKSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Dashboard", href: "#", icon: "fas fa-home" },
    { label: "Settings", href: "#", icon: "fas fa-cog" },
    { label: "Profile", href: "#", icon: "fas fa-user" },
    { label: "Logout", href: "#", icon: "fas fa-sign-out-alt" },
  ],
  bgColor: "#2c3e50",
  textColor: "#fff",
};
1