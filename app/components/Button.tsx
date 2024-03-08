"use client";
import React from "react";

type ButtonProps = {
  // click: (click: React.MouseEvent<HTMLButtonElement>) => void;
  click: () => Promise<void>;
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({ click }) => {
  return <button>Button</button>;
};

export default Button;
