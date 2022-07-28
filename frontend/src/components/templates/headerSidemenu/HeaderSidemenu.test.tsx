import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HeaderSidemenu from "./HeaderSidemenu";
import { SIDE_MENU_ITEMS } from "../../../Constants";
import { MemoryRouter } from "react-router-dom";

test("renders SideMenu", () => {
  render(<HeaderSidemenu />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("side-menu-organism")).toBeInTheDocument();
  const clickButton = screen.getByTestId(`${SIDE_MENU_ITEMS[0].label}`);
  fireEvent.click(clickButton);
});
test("it should render passed icon", () => {
  render(<HeaderSidemenu />, { wrapper: MemoryRouter });
  const message = screen.getByTestId("message-icon");
  expect(message).toBeInTheDocument();
});
test("it should render delivery passed icon", () => {
  render(<HeaderSidemenu />, { wrapper: MemoryRouter });
  const notify = screen.getByTestId("notifications-icon");
  expect(notify).toBeInTheDocument();
});
