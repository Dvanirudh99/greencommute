import * as React from "react";
import Icon from "./Icon";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  name: "save",
};
