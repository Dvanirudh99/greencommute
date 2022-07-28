import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobDetail from "./JobDetail";

export default {
  title: "molecules/JobDetail",
  component: JobDetail,
} as ComponentMeta<typeof JobDetail>;

const Template: ComponentStory<typeof JobDetail> = (args) => (
  <JobDetail {...args} />
);

export const jobDetail = Template.bind({});
jobDetail.args = {
  handleDelete: (event: any) => console.log("clicked delete"),
};