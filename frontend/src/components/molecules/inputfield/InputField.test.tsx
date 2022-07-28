import React from "react";
import InputField from "./InputField";
import { render, screen } from "@testing-library/react";

describe("Inputfield", () => {
  test("renders inputfield", () => {
    render(<InputField placeholder="enter your location" label="location" />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
