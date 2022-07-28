import * as React from "react";
import CheckboxItem from "./CheckBoxItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/Checkbox",
  component: CheckboxItem,
} as ComponentMeta<typeof CheckboxItem>;

const Template: ComponentStory<typeof CheckboxItem> = (args) => (
  <CheckboxItem {...args} />
);

export const checkboxItem = Template.bind({});
checkboxItem.args = {
  label: "work",
  defaultChecked: true,
  changeChecked: (event: any) => console.log("changed state"),
};
