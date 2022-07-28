import * as React from "react";
import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Buttons = ButtonTemplate.bind({});
Buttons.args = {
  variant: "contained",
  children: "Next",
  size: "large",
};
