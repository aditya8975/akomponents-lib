import React from "react";
import AKCard from "./AKCard";

export default {
  title: "Components/AKCard",
  component: AKCard,
};

const Template = (args) => <AKCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Welcome!",
  content: "This is a custom-styled card with bold outlines.",
  buttonText: "Get Started",
  titleColor: "#333",
  textColor: "#000",
  bgColor: "#fff",
  borderColor: "#ddd",
  hoverColor: "#f5f5f5",
  onClick: () => alert("Button Clicked!"),
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: "Special Offer",
  content: "Click below to claim your reward!",
  buttonText: "Claim Now",
  titleColor: "#ff5733",
  textColor: "#333",
  bgColor: "#fbeee6",
  borderColor: "#ff5733",
  hoverColor: "#ffd1b3",
};
