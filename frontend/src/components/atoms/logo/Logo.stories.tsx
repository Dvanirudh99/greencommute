import * as React from "react";
import Logo from "./Logo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Logos = Template.bind({});
Logos.args = {
  name: "bmw",
};
