import React from "react";
import AKSignupCard from "./AKSignupCard";

export default {
  title: "Components/AKSignupCard",
  component: AKSignupCard,
};

const Template = (args) => <AKSignupCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Create Account",
  bgColor: "#ffffff",
  shadowColor: "#191919",
  borderColor: "black",
  buttonText: "Sign Up",
  buttonColor: "#f57ac1",
  inputBorderColor: "black",
  textColor: "#000000",
  onSubmit: () => alert("Sign-up clicked!"),
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: "Join Us",
  bgColor: "#f8f9fa",
  shadowColor: "rgba(0, 0, 255, 0.3)",
  borderColor: "#007bff",
  buttonText: "Register",
  buttonColor: "#ff5733",
  inputBorderColor: "#ff5733",
  textColor: "#444",
  onSubmit: () => alert("Custom Sign-up Clicked!"),
};
