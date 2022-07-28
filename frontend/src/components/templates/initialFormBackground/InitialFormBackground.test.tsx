import React from "react";
import InitialFormBackground from "./InitialFormBackground";
import { render, screen } from "@testing-library/react";

describe("InitialFormBackground", () => {
  test("renders InitialFormBackground", () => {
    render(<InitialFormBackground />);
    expect(screen.getByTestId("initial-form-background")).toBeInTheDocument();
  });
});
