import * as React from "react";
import InputField from "./InputField";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Molecules/Inputfield",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <Box sx={{ width: "400px" }}>
    <InputField {...args} />
  </Box>
);

export const Input = Template.bind({});
Input.args = {
  placeholder: "Enter your location",
  label: "location",
};
