import React from "react";
import AKLoginCard from "./AKLoginCard";

export default {
  title: "Components/AKLoginCard",
  component: AKLoginCard,
};

const Template = (args) => <AKLoginCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sign In",
  bgColor: "#ffffff",
  shadowColor: "#191919",
  borderColor: "black",
  emailPlaceholder: "Email",
  passwordPlaceholder: "Password",
  buttonText: "Login",
  buttonColor: "#f57ac1",
  textColor: "#000000",
  onSubmit: () => alert("Login clicked!"),
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  title: "Welcome Back",
  bgColor: "#f8f9fa",
  shadowColor: "rgba(255, 0, 0, 0.3)",
  borderColor: "#ff5733",
  emailPlaceholder: "Enter your email",
  passwordPlaceholder: "Enter your password",
  buttonText: "Sign In",
  buttonColor: "#ff5733",
  textColor: "#444",
  onSubmit: () => alert("Custom Login Clicked!"),
};
