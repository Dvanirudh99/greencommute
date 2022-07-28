import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <MemoryRouter>
    <Box sx={{ width: "955px" }}>
      <SearchBar />
    </Box>
  </MemoryRouter>
);
export const searchBar = Template.bind({});
