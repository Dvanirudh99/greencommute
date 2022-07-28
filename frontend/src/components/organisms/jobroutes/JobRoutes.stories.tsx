import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JobRoutes } from "./JobRoutes";
import { Box } from "@mui/material";

export default {
  title: " organisms/Routes",
  component: JobRoutes,
} as ComponentMeta<typeof JobRoutes>;

const Template: ComponentStory<typeof JobRoutes> = (args) => (
  <Box sx={{ width: "100%" }}>
    <JobRoutes {...args} />
  </Box>
);

export const JobRoutesDefault = Template.bind({});

JobRoutesDefault.args = {
  source: "malakpet",
  destination: "ameerpet",
  jobInfo: {
    jobId: 1,
    jobDescription: "User Experience Designer",
    companyName: "myntra",
    companyLogo: "myntra",
    location: "Hitech city, Hyderabad - 500072",
    timePosted: "2days",
  },
  handleClick: (event: any) => console.log("clicked delete"),
};
