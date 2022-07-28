import React from "react";
import { MemoryRouter } from "react-router-dom";

const Sidemenudecorator = (Story: any) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

export default Sidemenudecorator;
