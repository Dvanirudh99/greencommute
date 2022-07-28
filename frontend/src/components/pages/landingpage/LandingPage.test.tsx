import React from "react";
import { LandingPage } from "./LandingPage";
import { render, screen } from "@testing-library/react";
import {
  JobLocationsContext,
  UserLocationContext,
  UserSkillsContext,
} from "../../../Store";
import { BrowserRouter as Router } from "react-router-dom";

describe("LandingPage", () => {
  const userLocationValue = {
    userLocation: "hyderabad",
    setUserLocation: (value: string) => {},
  };
  const jobLocationsValue = {
    jobLocations: ["mumbai"],
    setJobLocations: (value: string[]) => {},
  };
  const userSkillsValue = {
    userSkills: ["UI/UX Designer"],
    setUserSkills: (value: string[]) => {},
  };
  test("renders LandingPage", () => {
    render(
      <UserLocationContext.Provider value={userLocationValue}>
        <JobLocationsContext.Provider value={jobLocationsValue}>
          <UserSkillsContext.Provider value={userSkillsValue}>
            <Router>
              <LandingPage />
            </Router>
          </UserSkillsContext.Provider>
        </JobLocationsContext.Provider>
      </UserLocationContext.Provider>
    );
    expect(screen.getByTestId("initial-form-background")).toBeInTheDocument();
    expect(screen.getByTestId("landing-forms")).toBeInTheDocument();
  });
});
