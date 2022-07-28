import * as React from "react";
import Progressbar from "./progressbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/Progressbar",
  component: Progressbar,
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = () => <Progressbar />;
export const progress = Template.bind({});
