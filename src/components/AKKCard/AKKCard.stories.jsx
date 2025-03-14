import React from "react";
import AKKCard from "./AKKCard";

export default {
  title: "Components/AKKCard",
  component: AKKCard,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    imgSrc: { control: "text" },
    bgColor: { control: "color" },
    shadowColor: { control: "color" },
    borderColor: { control: "color" },
    borderRadius: { control: "text" },
    textColor: { control: "color" },
    buttonText: { control: "text" },
  },
};

const Template = (args) => <AKKCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Modern Card",
  content: "This is a stylish card component with refined UI improvements.",
  imgSrc: "https://via.placeholder.com/320x180",
  bgColor: "#ffffff",
  shadowColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "#ddd",
  borderRadius: "14px",
  textColor: "#333",
  buttonText: "Learn More",
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: "Featured Card",
  content: "This card comes with an image and refined layout.",
  imgSrc: "https://via.placeholder.com/320x180",
  bgColor: "#f9f9f9",
  shadowColor: "rgba(0, 0, 255, 0.2)",
  borderColor: "#007bff",
  borderRadius: "16px",
  textColor: "#444",
  buttonText: "Explore",
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: "Custom Design",
  content: "You can modify this card to match your brand's design language.",
  imgSrc: "https://via.placeholder.com/320x180",
  bgColor: "#fcf8e3",
  shadowColor: "rgba(255, 165, 0, 0.3)",
  borderColor: "#ff9800",
  borderRadius: "20px",
  textColor: "#5c3d00",
  buttonText: "Customize",
};
