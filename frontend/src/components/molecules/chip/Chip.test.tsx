import React from "react";
import Chip from "./Chip";
import { fireEvent, render, screen } from "@testing-library/react";

const label = "UI/UX Design";

describe("Chip", () => {
  test("renders  default Chip", () => {
    render(
      <Chip
        label={label}
        handleDelete={(event: any): void => {
          console.log("button clicked!");
        }}
        variant="defaultChip"
      />
    );
    expect(screen.getByText(`${label}`)).toBeInTheDocument();
    expect(screen.getByTestId("chip")).toBeInTheDocument();
    const remove = screen.getByTestId("close-icon");
    fireEvent.click(remove);
  });
  test("renders  filter Chip", () => {
    render(
      <Chip
        label={label}
        handleDelete={(event: any): void => {
          console.log("button clicked!");
        }}
        variant={"filterChip"}
      />
    );
    expect(screen.getByText(`${label}`)).toBeInTheDocument();
    expect(screen.getByTestId("chip")).toBeInTheDocument();
    const remove = screen.getByTestId("close-icon");
    fireEvent.click(remove);
  });
});
