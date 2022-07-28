import React from "react";
import { CommonCardHeader } from "./CommonCardHeader";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CommonCardHeader", () => {
  test("renders saved CommonCardHeader", () => {
    render(
      <CommonCardHeader
        jobId={1}
        jobDescription="User Experience Designer"
        companyName="myntra"
        companyLogo="myntra"
        location="Hitech city, Hyderabad - 500072"
        timePosted="2days"
      />
    );
    expect(screen.getByTestId("common-card-header")).toBeInTheDocument();
    // const saveButton = screen.getByTestId("button-save");
    // fireEvent.click(saveButton);
    // const applyButton = screen.getByTestId("button-apply");
    // fireEvent.click(applyButton);
  });

  test("renders unsaved CommonCardHeader", () => {
    render(
      <CommonCardHeader
        jobId={1}
        jobDescription="User Experience Designer"
        companyName="myntra"
        companyLogo="myntra"
        location="Hitech city, Hyderabad - 500072"
        timePosted="2days"
      />
    );
    expect(screen.getByTestId("common-card-header")).toBeInTheDocument();
    // const unsaveButton = screen.getByTestId("button-save");
    // fireEvent.click(unsaveButton);
    // const applyButton = screen.getByTestId("button-apply");
    // fireEvent.click(applyButton);
  });
});
