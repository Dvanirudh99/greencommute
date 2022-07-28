import * as React from "react";
import { ShapeWithNumber } from "./ShapeWithNumber";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: " Atoms/AqiIndex",
  component: ShapeWithNumber,
} as ComponentMeta<typeof ShapeWithNumber>;

const Template: ComponentStory<typeof ShapeWithNumber> = (args) => (
  <ShapeWithNumber {...args} />
);

export const AqiIndex = Template.bind({});
AqiIndex.args = {
  label: 819,
};
