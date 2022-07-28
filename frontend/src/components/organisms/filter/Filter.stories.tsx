import * as React from "react";
import Filter from "./Filter";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RecoilRoot } from "recoil";

export default {
  title: "Organisms/Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => (
  <RecoilRoot>
    <Filter />
  </RecoilRoot>
);

export const filter = Template.bind({});
