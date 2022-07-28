import React from "react";
import Header from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderDecorator from "../../../../.storybook/decorators/HeaderDecorator";

export default {
  title: "organisms/Header",
  component: Header,
  decorators: [HeaderDecorator],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const headerComp = Template.bind({});
