import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FilterButton from "./FilterButton";

export default {
  title: "Molecules/FilterButton",
  component: FilterButton,
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => (
  <FilterButton {...args} />
);

export const filterButton = Template.bind({});
filterButton.args = {
  handleClick: (event: any) => console.log("clicked delete"),
  iconName: "filter",
  title: "Filter",
};
