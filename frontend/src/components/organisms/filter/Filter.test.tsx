import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "./Filter";
import { RecoilRoot } from "recoil";
const label = "hello";
describe("Filter button", () => {
  test("renders button", () => {
    render(
      <RecoilRoot>
        <Filter />
      </RecoilRoot>
    );
    expect(screen.getByTestId("filter")).toBeInTheDocument();
    const filter = screen.getByTestId("filterbutton");
    fireEvent.click(filter);

    const clearButton = screen.getByTestId("clearbutton");
    fireEvent.click(clearButton);
    const applyButton = screen.getByTestId("button-apply");
    fireEvent.click(applyButton);
    screen.debug();
  });
});
