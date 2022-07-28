import * as React from "react";
import AutoComplete from "./AutoComplete";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: " Molecules/AutoComplete",
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
);
export const AutoComplete_ = Template.bind({});
AutoComplete_.args = {
  options: ["hyderabad", "mumbai"],
  handleChange: (event: any, value: any) => console.log(value),
  value: "location",
  placeholder: "enter location",
};
