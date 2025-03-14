import React from "react";
import AKKButton from "./AKKButton";

export default {
  title: "Components/AKKButton",
  component: AKKButton,
  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "select", options: ["primary", "secondary", "glow"] },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    bgColor: { control: "color" },
    textColor: { control: "color" },
    shadowColor: { control: "color" },
    borderRadius: { control: "text" },
    hoverEffect: { control: "boolean" },
  },
};

const Template = (args) => <AKKButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  size: "medium",
};

export const Glow = Template.bind({});
Glow.args = {
  label: "Glowing Button",
  variant: "glow",
  size: "medium",
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  label: "Custom Button",
  variant: "primary",
  size: "large",
  bgColor: "#ff5733",
  textColor: "#ffffff",
  shadowColor: "rgba(255, 0, 0, 0.3)",
  borderRadius: "20px",
  hoverEffect: true,
};
