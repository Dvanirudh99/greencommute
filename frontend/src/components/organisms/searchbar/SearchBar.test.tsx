import React from "react";
import SearchBar from "./SearchBar";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { JobLocationsContext, UserSkillsContext } from "../../../Store";
import { MemoryRouter } from "react-router-dom";
const jobLocationsValue = {
  jobLocations: ["mumbai"],
  setJobLocations: (value: string[]) => {},
};
const userSkillsValue = {
  userSkills: ["UI/UX Designer"],
  setUserSkills: (value: string[]) => {},
};
describe("SearchBar", () => {
  test("renders SearchBar", async () => {
    render(
      <MemoryRouter>
        <JobLocationsContext.Provider value={jobLocationsValue}>
          <UserSkillsContext.Provider value={userSkillsValue}>
            <SearchBar />
          </UserSkillsContext.Provider>
        </JobLocationsContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("searchbar")).toBeInTheDocument();
    const skillAutoComplete = screen.getAllByTestId("AutoComplete");
    skillAutoComplete[0].focus();
    fireEvent.keyDown(skillAutoComplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(skillAutoComplete[0], { key: "Enter" });
    skillAutoComplete[1].focus();
    fireEvent.keyDown(skillAutoComplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(skillAutoComplete[1], { key: "Enter" });
    const saveButton = screen.getByTestId("searchbutton");
    fireEvent.click(saveButton);
  });
});
