import * as React from "react";
import RecommendedCard from "./RecommendedCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organisms/RecommendedCard",
  component: RecommendedCard,
} as ComponentMeta<typeof RecommendedCard>;

const Template: ComponentStory<typeof RecommendedCard> = (args) => (
  <RecommendedCard {...args} />
);

export const RecommendedCards = Template.bind({});
RecommendedCards.args = {
  role: "User Experience Designer",
  company: "hp",
  address: "Hyderabad, Telangana, India",
  routes: ["bike", "bus", "car", "train"],
  history: "1hr 36 mins ago",
};
