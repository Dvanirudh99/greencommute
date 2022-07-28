import React from "react";
import CheckboxItem from "./CheckBoxItem";
import { render, screen } from "@testing-library/react";

const label = "hello";
describe("Checkbox", () => {
  test("renders checkbox", () => {
    render(
      <CheckboxItem
        label="hello"
        defaultChecked={true}
        changeChecked={() => {
          console.log("changed state");
        }}
      />
    );
    expect(screen.getByTestId(`${label}-checkbox`)).toBeInTheDocument();
  });
});
