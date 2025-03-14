import React from "react";
import AKButton from "./AKButton";

export default {
  title: "Components/AKButton",
  component: AKButton,
};

const Template = (args) => <AKButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  title: "Primary Button",
  bgColor: "#007bff",
  textColor: "#ffffff",
  hoverColor: "#0056b3",
  onClick: () => alert("Button Clicked!"),
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Delete",
  title: "Danger Button",
  bgColor: "#dc3545",
  textColor: "#ffffff",
  hoverColor: "#a71d2a",
};
