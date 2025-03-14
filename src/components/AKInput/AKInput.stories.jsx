import React from "react";
import AKInput from "./AKInput";

export default {
  title: "Components/AKInput",
  component: AKInput,
};

const Template = (args) => <AKInput {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "Enter your email",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Enter your password",
};

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Enter your name",
};
