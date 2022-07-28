import React, { useMemo } from "react";
import {
  LocationsContext,
  SkillsContext,
} from "../../src/components/pages/landingpage/LandingPage";
import {
  JobLocationsType,
  JOB_LOCATIONS,
  SkillJobsType,
  SKILLS_JOBS,
} from "../../src/Constants";
import {
  UserLocationContext,
  JobLocationsContext,
  UserSkillsContext,
} from "../../src/Store";
import { BrowserRouter as Router } from "react-router-dom";

const LandingFormsDecorator = (Story: any, context: any) => {
  const [userLocation, setUserLocation] = React.useState<string>("");
  const [jobLocations, setJobLocations] = React.useState<string[]>([]);
  const [userSkills, setUserSkills] = React.useState<string[]>([]);
  const [locations, setLocations] =
    React.useState<JobLocationsType[]>(JOB_LOCATIONS);
  const [skills, setSkills] = React.useState<SkillJobsType[]>(SKILLS_JOBS);
  const userLocationValue = useMemo(
    () => ({ userLocation, setUserLocation }),
    [userLocation]
  );
  const jobLocationsValue = useMemo(
    () => ({ jobLocations, setJobLocations }),
    [jobLocations]
  );
  const userSkillsValue = useMemo(
    () => ({ userSkills, setUserSkills }),
    [userSkills]
  );
  const locationsValue = useMemo(
    () => ({ locations, setLocations }),
    [locations]
  );
  const skillsValue = useMemo(() => ({ skills, setSkills }), [skills]);

  return (
    <UserLocationContext.Provider value={userLocationValue}>
      <JobLocationsContext.Provider value={jobLocationsValue}>
        <UserSkillsContext.Provider value={userSkillsValue}>
          <LocationsContext.Provider value={locationsValue}>
            <SkillsContext.Provider value={skillsValue}>
              <Router>
                <Story />
              </Router>
            </SkillsContext.Provider>
          </LocationsContext.Provider>
        </UserSkillsContext.Provider>
      </JobLocationsContext.Provider>
    </UserLocationContext.Provider>
  );
};

export default LandingFormsDecorator;
