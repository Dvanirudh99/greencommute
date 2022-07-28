import React from "react";
import SideMenu from "./SideMenu";
import { render, screen } from "@testing-library/react";

const menuItem: {
  icon: "save";
  text: string;
} = {
  icon: "save",
  text: "saved jobs",
};

describe("SideMenu", () => {
  test("renders SideMenu", () => {
    render(<SideMenu iconName={menuItem.icon} label={menuItem.text} />);
    expect(screen.getByTestId("side-menu")).toBeInTheDocument();
    expect(
      screen.getByTestId(`${menuItem.icon.toString()}-icon`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${menuItem.text}`)).toBeInTheDocument();
  });
});
