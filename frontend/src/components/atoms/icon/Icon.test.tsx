import React from "react";
import Icon from "./Icon";
import { render, screen } from "@testing-library/react";

const iconName = "save";

describe("Icon", () => {
  test("renders icon", () => {
    render(<Icon name={iconName} />);
    expect(screen.getByTestId(`${iconName}-icon`)).toBeInTheDocument();
  });
});
