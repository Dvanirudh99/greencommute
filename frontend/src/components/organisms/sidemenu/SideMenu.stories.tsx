import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideMenu from "./SideMenu";
import Sidemenudecorator from "../../../../.storybook/decorators/Sidemenudecorator";
export default {
  title: " organisms/SideMenu",
  component: SideMenu,
  decorators: [Sidemenudecorator],
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = () => (
  <SideMenu labelNo={3} />
);

export const SideMenu_ = Template.bind({});
