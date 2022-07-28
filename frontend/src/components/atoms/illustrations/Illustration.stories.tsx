import * as React from "react";
import Illustration from "./Illustration";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Images",
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
  <Illustration {...args} />
);

export const Image = Template.bind({});
Image.args = {
  name: "work",
};
