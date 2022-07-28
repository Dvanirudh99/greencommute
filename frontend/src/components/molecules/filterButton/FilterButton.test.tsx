import React from "react";
import { render, screen } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("Filter button", () => {
  test("renders button", () => {
    render(
      <FilterButton
        handleClick={(event: any): void => {
          console.log("button clicked!");
        }}
        iconName="filter"
        title="Filter"
      />
    );
    expect(screen.getByTestId("filterbutton")).toBeInTheDocument();
  });
});
