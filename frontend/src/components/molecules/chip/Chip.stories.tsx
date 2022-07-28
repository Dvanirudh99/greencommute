import * as React from "react";
import Chip from "./Chip";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: " Molecules/Chip",
  component: Chip,
  argTypes: {
    variant: {
      options: ["defaultChip", "filterChip"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Chip_ = Template.bind({});
Chip_.args = {
  label: "Hyderabad",
  handleDelete: (event: any) => console.log("clicked delete"),
};
