import React from "react";
import AKHeader from "./AKHeader";

export default {
  title: "Components/AKHeader",
  component: AKHeader,
  argTypes: {
    title: { control: "text" },
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <AKHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "My Website",
  bgColor: "#333",
  textColor: "#fff",
};
