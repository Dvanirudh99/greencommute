import React from "react";
import { ShapeWithNumber } from "./ShapeWithNumber";
import { render, screen } from "@testing-library/react";

const label = 819;

describe("ShapeWithNumber", () => {
  test("renders ShapeWithNumber", () => {
    render(<ShapeWithNumber label={label} />);
    expect(screen.getByTestId("ShapeWithNumber")).toBeInTheDocument();
    expect(screen.getByText(`${label}`)).toBeInTheDocument();
  });
});
