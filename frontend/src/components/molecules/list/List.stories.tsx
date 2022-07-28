import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import List from "./List";


export default {
  title: "Molecules/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const contents = Template.bind({});
contents.args = {
  name: "ola",
  title: "ola",
  price: "45",
};
