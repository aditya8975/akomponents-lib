import React from "react";
import AKKRegister from "./AKKRegister";

export default {
  title: "Components/AKKRegister",
  component: AKKRegister,
};

const Template = (args) => <AKKRegister {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSrc: "/logo.png",
  usernameLabel: "Full Name",
  emailLabel: "Email",
  passwordLabel: "Create Password",
  buttonText: "Sign Up",
  loginText: "Already have an account? Login",
  togglePasswordIcons: { open: "👀", closed: "🔐" },
  bgColor: "#ffffff",
  shadowColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "#ddd",
  buttonColor: "#2575fc",
  textColor: "#333",
  linkColor: "#2575fc",
  onSubmit: () => alert("Register clicked!"),
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  logoSrc: "/logo.png",
  usernameLabel: "User ID",
  emailLabel: "Your Email",
  passwordLabel: "Secure Password",
  buttonText: "Create Account",
  loginText: "Already registered? Sign In",
  togglePasswordIcons: { open: "👁️", closed: "🔒" },
  bgColor: "#f8f9fa",
  shadowColor: "rgba(255, 0, 0, 0.3)",
  borderColor: "#ff5733",
  buttonColor: "#ff5733",
  textColor: "#444",
  linkColor: "#ff5733",
  onSubmit: () => alert("Custom Register Clicked!"),
};
