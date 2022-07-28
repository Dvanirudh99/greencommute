import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  placeholder: string;
  label: string;
  [key: string]: string;
}
const InputField = ({ placeholder, label, ...props }: InputProps) => {
  return (
    <TextField
      label={label}
      data-testid="input"
      value={placeholder}
      {...props}
      fullWidth
    />
  );
};
export default InputField;
