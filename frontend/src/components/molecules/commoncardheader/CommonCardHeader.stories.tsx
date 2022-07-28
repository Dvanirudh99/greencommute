import * as React from "react";
import { CommonCardHeader } from "./CommonCardHeader";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: " Molecules/CommonCardHeader",
  component: CommonCardHeader,
} as ComponentMeta<typeof CommonCardHeader>;

const Template: ComponentStory<typeof CommonCardHeader> = (args) => (
  <Box sx={{ width: "404px" }}>
    <CommonCardHeader {...args} />
  </Box>
);

export const CommonCardHeaderDefault = Template.bind({});
CommonCardHeaderDefault.args = {
  jobId: 1,
  jobDescription: "User Experience Designer",
  companyName: "myntra",
  companyLogo: "myntra",
  location: "Hitech city, Hyderabad - 500072",
  timePosted: "2days",
};
