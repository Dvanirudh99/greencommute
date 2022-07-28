import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeaderSidemenu from "./HeaderSidemenu";
import HeaderSideMenuDecorator from "../../../../.storybook/decorators/HeaderSideMenuDecorator";

export default {
  title: " Templates/HeaderSidemenu",
  component: HeaderSidemenu,
  decorators: [HeaderSideMenuDecorator],
} as ComponentMeta<typeof HeaderSidemenu>;
const templates: ComponentStory<typeof HeaderSidemenu> = () => (
  <HeaderSidemenu />
);
export const Temp_ = templates.bind({});
