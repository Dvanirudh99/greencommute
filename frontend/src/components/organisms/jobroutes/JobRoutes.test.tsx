import React from "react";
import { JobRoutes } from "./JobRoutes";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Routes", () => {
  const myMock = jest.fn();
  test("renders Routes", () => {
    render(
      <JobRoutes
        source="malakpet"
        destination="ameerpet"
        jobInfo={{
          jobId: 1,
          jobDescription: "User Experience Designer",
          companyName: "myntra",
          companyLogo: "myntra",
          location: "Hitech city, Hyderabad - 500072",
          timePosted: "2days",
        }}
        handleClick={myMock}
      />
    );
    expect(screen.getByTestId("routes")).toBeInTheDocument();
    // const saveButton = screen.getByTestId("button-save");
    // fireEvent.click(saveButton);
    // const applyButton = screen.getByTestId("button-apply");
    // fireEvent.click(applyButton);
    const toggleMode = screen.getByTestId("toggle-cab");
    fireEvent.click(toggleMode);
    const toggleMode2 = screen.getByTestId("toggle-train");
    fireEvent.click(toggleMode2);
  });
});
