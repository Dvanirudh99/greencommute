import * as React from "react";
import SideMenu from "./SideMenu";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: " Molecules/SideMenu",
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
);

export const SideMenu_ = Template.bind({});
SideMenu_.args = {
  iconName: "save",
  label: "saved jobs",
};
