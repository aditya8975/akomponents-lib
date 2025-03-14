import React from "react";
import AKKLogin from "./AKKLogin";

export default {
  title: "Components/AKKLogin",
  component: AKKLogin,
};

const Template = (args) => <AKKLogin {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSrc: "/logo.png",
  usernameLabel: "Username",
  passwordLabel: "Password",
  buttonText: "Login",
  forgotPasswordText: "Forgot Password?",
  signupText: "Don't have an account? Sign Up",
  togglePasswordIcons: { open: "👁️", closed: "🔒" },
  bgColor: "#ffffff",
  shadowColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "#ddd",
  buttonColor: "#2575fc",
  textColor: "#333",
  linkColor: "#2575fc",
  onSubmit: () => alert("Login clicked!"),
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  logoSrc: "/logo.png",
  usernameLabel: "User ID",
  passwordLabel: "Secure Code",
  buttonText: "Sign In",
  forgotPasswordText: "Need Help?",
  signupText: "Create Account",
  togglePasswordIcons: { open: "👀", closed: "🔐" },
  bgColor: "#f8f9fa",
  shadowColor: "rgba(0, 0, 255, 0.3)",
  borderColor: "#007bff",
  buttonColor: "#ff5733",
  textColor: "#444",
  linkColor: "#ff5733",
  onSubmit: () => alert("Custom Login Clicked!"),
};
