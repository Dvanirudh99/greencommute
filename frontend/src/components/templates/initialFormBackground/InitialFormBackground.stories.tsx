import * as React from "react";
import InitialFormBackground from "./InitialFormBackground";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Templates/InitialFormBackground",
  component: InitialFormBackground,
} as ComponentMeta<typeof InitialFormBackground>;

export const InitialFormBackground_: ComponentStory<
  typeof InitialFormBackground
> = () => <InitialFormBackground />;
