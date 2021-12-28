import * as React from "react";
import { Button as RNButton } from "react-native";
import type { ButtonProps } from "react-native";

export const Button = ({ title = "Cool Native", ...props }: ButtonProps) => {
  return <RNButton title={title} {...props} />;
};
