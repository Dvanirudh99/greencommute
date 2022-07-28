import React from "react";
import Logo from "./Logo";
import { render, screen } from "@testing-library/react";

const logoName = "bmw";

describe("Logo", () => {
  test("renders Logo", () => {
    render(<Logo name={logoName} />);
    expect(screen.getByTestId(`${logoName}-logo`)).toBeInTheDocument();
  });
});
