import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { createContext, useMemo } from "react";
import { JobLocationsType, SkillJobsType } from "../../../Constants";
import LandingForms from "../../organisms/landingforms/LandingForms";
import InitialFormBackground from "../../templates/initialFormBackground/InitialFormBackground";
import AppService from "../../../api-service/app-service/AppService";

/**
 * @author Nagavinay <nagavinay.chinthada@zemosolabs.com>
 */

const useStyles = makeStyles({
  forms: {
    paddingLeft: "6.5rem",
  },
});

const locationsArray: JobLocationsType[] = [];

export const LocationsContext = createContext({
  locations: locationsArray,
  setLocations: (_value: JobLocationsType[]) => {
    /* location setter */
  },
});

const skillsArray: SkillJobsType[] = [];

export const SkillsContext = createContext({
  skills: skillsArray,
  setSkills: (_value: SkillJobsType[]) => {
    /* skills setter */
  },
});

export const LandingPage = () => {
  const [locations, setLocations] = React.useState<JobLocationsType[]>([]);
  const [skills, setSkills] = React.useState<SkillJobsType[]>([]);
  const locationsValue = useMemo(
    () => ({ locations, setLocations }),
    [locations]
  );
  const skillsValue = useMemo(() => ({ skills, setSkills }), [skills]);
  const classes = useStyles();

  const loadLocations = async () => {
    const locationsData: JobLocationsType[] = await AppService.getLocations();
    setLocations(locationsData);
  };
  const loadSkills = async () => {
    const skillsData: SkillJobsType[] = await AppService.getSkills();
    setSkills(skillsData);
  };

  React.useEffect(() => {
    loadLocations();
    loadSkills();
  }, []);
  return (
    <LocationsContext.Provider value={locationsValue}>
      <SkillsContext.Provider value={skillsValue}>
        <InitialFormBackground>
          <Box className={classes.forms}>
            <LandingForms />
          </Box>
        </InitialFormBackground>
      </SkillsContext.Provider>
    </LocationsContext.Provider>
  );
};
