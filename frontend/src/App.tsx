import React, { useMemo } from "react";
import { StyledEngineProvider, ThemeProvider, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./themes/Theme";
import FindJobsPage from "./components/pages/findJobsPage/FindJobsPage";
import SavedJobsPage from "./components/pages/savedJobsPage/SavedJobsPage";
import { LandingPage } from "./components/pages/landingpage/LandingPage";
import {
  JobLocationsContext,
  UserSkillsContext,
  UserLocationContext,
  SavedJobsContext,
} from "./Store";
import { RecoilRoot } from "recoil";
import { SaveJobsType } from "./Constants";
import SaveJobsService from "./api-service/savejobs-service/SaveJobsService";

export const App = () => {
  const [userLocation, setUserLocation] = React.useState<string>("");
  const [jobLocations, setJobLocations] = React.useState<string[]>([]);
  const [userSkills, setUserSkills] = React.useState<string[]>([]);
  const [savedJobs, setSavedJobs] = React.useState<SaveJobsType[]>([]);
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
  const savedJobsValue = useMemo(
    () => ({ savedJobs, setSavedJobs }),
    [savedJobs]
  );

  const loadSavedJobs = async () => {
    const savedJobsItems: SaveJobsType[] = await SaveJobsService.getSaveJobs();
    setSavedJobs(savedJobsItems);
  };
  React.useEffect(() => {
    loadSavedJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <RecoilRoot>
          <UserLocationContext.Provider value={userLocationValue}>
            <JobLocationsContext.Provider value={jobLocationsValue}>
              <UserSkillsContext.Provider value={userSkillsValue}>
                <SavedJobsContext.Provider value={savedJobsValue}>
                  <Router>
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/find-jobs" element={<FindJobsPage />} />
                      <Route path="/find-jobs/:id" element={<FindJobsPage />} />
                      <Route path="/saved-jobs" element={<SavedJobsPage />} />
                      <Route
                        path="/saved-jobs/:id"
                        element={<SavedJobsPage />}
                      />
                      <Route
                        path="*"
                        element={
                          <Typography variant="h3">page not found</Typography>
                        }
                      />
                    </Routes>
                  </Router>
                </SavedJobsContext.Provider>
              </UserSkillsContext.Provider>
            </JobLocationsContext.Provider>
          </UserLocationContext.Provider>
        </RecoilRoot>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};
