import * as React from "react";
import JobDescription from "./JobDescription";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organisms/JobDescription",
  component: JobDescription,
} as ComponentMeta<typeof JobDescription>;

export const Description_: ComponentStory<typeof JobDescription> = (args) => (
  <JobDescription {...args} />
);

Description_.args = {
  handleClick: () => {},
  jobId: 1,
  jobdescription: "User Experience Designer",
  companyName: "Myntra",
  companyLogo: "myntra",
  location: "Hyderabad",
  timePosted: "36 mins ago",
};
