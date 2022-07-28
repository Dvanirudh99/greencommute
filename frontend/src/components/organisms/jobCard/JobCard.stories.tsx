import * as React from "react";
import JobCard from "./JobCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Organisms/JobCard",
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <Box sx={{ width: "570px" }}>
    <JobCard {...args} />
  </Box>
);

export const JobCards = Template.bind({});
JobCards.args = {
  role: "User Experience Designer",
  company: "myntra",
  address: "Hitech city, Hyderabad - 500072",
  routes: ["bike", "bus", "car"],
  history: "36 min ago",
  isActive: true,
};
