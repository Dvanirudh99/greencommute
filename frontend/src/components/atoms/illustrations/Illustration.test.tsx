import React from "react";
import Illustration from "./Illustration";
import { render, screen } from "@testing-library/react";

describe("Icon", () => {
  test("renders icon", () => {
    render(<Illustration name="work" />);
    expect(screen.getByTestId("illustration")).toBeInTheDocument();
  });
});
