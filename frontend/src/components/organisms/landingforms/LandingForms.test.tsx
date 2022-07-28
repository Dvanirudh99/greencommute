import React from "react";
import LandingForms from "./LandingForms";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  JobLocationsContext,
  UserLocationContext,
  UserSkillsContext,
} from "../../../Store";
import {
  LocationsContext,
  SkillsContext,
} from "../../pages/landingpage/LandingPage";
import {
  JobLocationsType,
  JOB_LOCATIONS,
  SkillJobsType,
  SKILLS_JOBS,
} from "../../../Constants";
import { BrowserRouter as Router } from "react-router-dom";

describe("LandingForms", () => {
  beforeEach(() => {
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
    const locationsValue = {
      locations: JOB_LOCATIONS,
      setLocations: (value: JobLocationsType[]) => {},
    };
    const skillsValue = {
      skills: SKILLS_JOBS,
      setSkills: (value: SkillJobsType[]) => {},
    };

    render(
      <UserLocationContext.Provider value={userLocationValue}>
        <JobLocationsContext.Provider value={jobLocationsValue}>
          <UserSkillsContext.Provider value={userSkillsValue}>
            <LocationsContext.Provider value={locationsValue}>
              <SkillsContext.Provider value={skillsValue}>
                <Router>
                  <LandingForms />
                </Router>
              </SkillsContext.Provider>
            </LocationsContext.Provider>
          </UserSkillsContext.Provider>
        </JobLocationsContext.Provider>
      </UserLocationContext.Provider>
    );
  });
  test("renders LandingForms component", () => {
    expect(screen.getByTestId("landing-forms")).toBeInTheDocument();
  });
  test("renders next button", () => {
    const nextBtn = screen.getByTestId("nextBtn");
    expect(nextBtn).toBeInTheDocument();
  });
  test("renders back button", () => {
    const nextBtn = screen.getByTestId("nextBtn");
    fireEvent.click(nextBtn);
    const backBtn = screen.getByTestId("backBtn");
    expect(backBtn).toBeInTheDocument();
  });
  test("renders UserLocation component", () => {
    expect(screen.getByTestId("user-location-form")).toBeInTheDocument();
  });
  test("renders JobLocation component", () => {
    const nextBtn = screen.getByTestId("nextBtn");
    fireEvent.click(nextBtn);
    expect(screen.getByTestId("job-location-form")).toBeInTheDocument();
  });
  test("renders Skills component", () => {
    const nextBtn = screen.getByTestId("nextBtn");
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    expect(screen.getByTestId("skills-form")).toBeInTheDocument();
    fireEvent.click(nextBtn);
  });
});

describe("LandingForms 2", () => {
  beforeEach(() => {
    render(
      <Router>
        <LandingForms />
      </Router>
    );
  });
  test("renders nextBtn", () => {
    expect(screen.getByTestId("nextBtn")).toBeInTheDocument();
  });
});
