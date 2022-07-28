import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FindJobsPage from "./FindJobsPage";
import { RecoilRoot } from "recoil";
import { JobLocationsContext, UserSkillsContext } from "../../../Store";

const jobLocationsValue = {
  jobLocations: ["hyderabad"],
  setJobLocations: (value: string[]) => {},
};
const userSkillsValue = {
  userSkills: ["UI/UX Designer"],
  setUserSkills: (value: string[]) => {},
};
beforeEach(() => {
  render(
    <JobLocationsContext.Provider value={jobLocationsValue}>
      <UserSkillsContext.Provider value={userSkillsValue}>
        <RecoilRoot>
          <FindJobsPage />
        </RecoilRoot>
      </UserSkillsContext.Provider>
    </JobLocationsContext.Provider>,
    { wrapper: MemoryRouter }
  );
});

describe("FindJobsPage", () => {
  test("renders FindJobs", async () => {
    await screen.findAllByTestId("recommended-card");
    const cards = screen.getByTestId("recommended-card-link-1");
    fireEvent.click(cards);
    const skillAutoComplete = screen.getAllByTestId("AutoComplete");
    skillAutoComplete[0].focus();
    fireEvent.keyDown(skillAutoComplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(skillAutoComplete[0], { key: "Enter" });
    skillAutoComplete[1].focus();
    fireEvent.keyDown(skillAutoComplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(skillAutoComplete[1], { key: "Enter" });
    const saveButton = screen.getByTestId("searchbutton");
    fireEvent.click(saveButton);
    fireEvent.click(screen.getByTestId("filterbutton"));
    fireEvent.click(screen.getByTestId("button-apply"));
    expect(screen.getByTestId("find-jobs-page")).toBeInTheDocument();
    expect(screen.getByTestId("recommended")).toBeInTheDocument();
  });
});
