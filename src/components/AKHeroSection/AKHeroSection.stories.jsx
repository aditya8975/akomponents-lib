import React from "react";
import AKHeroSection from "./AKHeroSection";

export default {
  title: "Components/AKHeroSection",
  component: AKHeroSection,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <AKHeroSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Welcome to My Website",
  subtitle: "This is a customizable hero section.",
  bgColor: "#f8f9fa",
  textColor: "#000",
};
