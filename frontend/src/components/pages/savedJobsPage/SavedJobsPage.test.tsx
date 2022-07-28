import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SavedJobsPage from "./SavedJobsPage";
import { SavedJobsContext } from "../../../Store";
import { SaveJobsType } from "../../../Constants";

describe("SavedJobsPage", () => {
  beforeEach(() => {
    const savedJobsValue = {
      savedJobs: [{ id: 1, jobId: 1 }],
      setSavedJobs: (value: SaveJobsType[]) => {},
    };
    render(
      <SavedJobsContext.Provider value={savedJobsValue}>
        <SavedJobsPage />
      </SavedJobsContext.Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test("renders SavedJobs", () => {
    expect(screen.getByTestId("saved-jobs")).toBeInTheDocument();
  });
});
