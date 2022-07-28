import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LandingForms from "./LandingForms";
import { Box } from "@mui/material";
import LandingFormsDecorator from "../../../../.storybook/decorators/LandingFormsDecorator";

export default {
  title: " organisms/Landing Forms",
  component: LandingForms,
  decorators: [LandingFormsDecorator],
} as ComponentMeta<typeof LandingForms>;

const Template: ComponentStory<typeof LandingForms> = () => (
  <Box sx={{ width: "100%" }}>
    <LandingForms />
  </Box>
);

export const LandingFormsDefault = Template.bind({});
