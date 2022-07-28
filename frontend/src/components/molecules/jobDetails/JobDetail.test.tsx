import React from "react";
import { render, screen } from "@testing-library/react";
import JobDetail from "./JobDetail";

describe("Filter button", () => {
  test("renders button", () => {
    render(
      <JobDetail handleDelete={(event: any) => console.log("clicked delete")} />
    );
    expect(screen.getByTestId("jobDetail")).toBeInTheDocument();
  });
});
