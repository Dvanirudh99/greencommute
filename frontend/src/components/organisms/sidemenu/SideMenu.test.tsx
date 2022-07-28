import React from "react";
import SideMenu from "./SideMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { SIDE_MENU_ITEMS } from "../../../Constants";
import { MemoryRouter } from "react-router-dom";
describe("SideMenu", () => {
  test("renders SideMenu", () => {
    render(<SideMenu labelNo={3} />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("side-menu-organism")).toBeInTheDocument();
    const clickButton = screen.getByTestId(`${SIDE_MENU_ITEMS[0].label}`);
    fireEvent.click(clickButton);
  });
});
