import { Stack, IconButton, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { theme } from "../../../themes/Theme";
import Icon from "../../atoms/icon/Icon";
import { FilteredJobs } from "../../../Constants";
import AutoComplete from "../../molecules/autocomplete/AutoComplete";
import { JobLocationsContext, UserSkillsContext } from "../../../Store";
import { JobsContext } from "../../pages/findJobsPage/FindJobsPage";
import JobsService from "../../../api-service/jobs-service/JobsService";
import { useNavigate } from "react-router-dom";
/**
 * @author Arthi Aneel <arthi.aneel@zemosolabs.com>
 */
const useStyles = makeStyles({
  stack: {
    borderRadius: "32px",
    width: "100%",
    height: "56px",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.structural.white,
    [theme.breakpoints.down("md")]: { flexDirection: "column" },
  },
  autocomplete: {
    width: "408px",
  },
  icon: {
    backgroundColor: theme.palette.primary[400],
    height: "44px",
    width: "44px",
    marginTop: "2px",
    marginRight: "6px",
    "&:hover ": {
      backgroundColor: theme.palette.primary[600],
    },
  },
  inputIcon: {
    paddingLeft: "20px",
  },
});

const SearchBar = () => {
  const classes = useStyles();
  const [skills, setSkills] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const { jobLocations } = React.useContext(JobLocationsContext);
  const { userSkills } = React.useContext(UserSkillsContext);
  const { jobs, setJobs } = React.useContext(JobsContext);
  const [jobsData, setJobsData] = useState<FilteredJobs[]>([...jobs]);
  const navigate = useNavigate();

  const handleClick = () => {
    setSkills(skills);
    setLocation(location);
    FilterJobs(location, skills);
  };

  const filterRecommendedJobs = (filterJobs: FilteredJobs[]) => {
    filterJobs = filterJobs.filter((job) =>
      jobLocations.find((jobLocation) =>
        job.address.toLowerCase().includes(jobLocation)
      )
    );
    filterJobs = filterJobs.filter((job) =>
      userSkills.find((userSkill) => job.skill.includes(userSkill))
    );
    setJobsData(filterJobs);
  };
  const loadJobs = async () => {
    const filterJobs: FilteredJobs[] = await JobsService.getJobs();
    filterRecommendedJobs(filterJobs);
  };
  useEffect(() => {
    loadJobs();
  }, []);
  const FilterJobs = (locations: string, skill: string) => {
    let filteredJobs: FilteredJobs[] = [];
    filteredJobs = jobsData.filter(
      (job) =>
        job.address.toLowerCase().includes(locations) &&
        job.skill.includes(skill)
    );

    setJobs(filteredJobs);
    if ((skills.length > 0 || location.length > 0) && filteredJobs.length > 0)
      navigate("/find-jobs/" + filteredJobs[0].id);
  };

  return (
    <>
      <Stack direction="row" className={classes.stack} data-testid="searchbar">
        <Box
          sx={{
            height: "36px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRight: "1px solid",
              borderColor: "#D6D6D6",
              height: "36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon name="work" className={classes.inputIcon} />
            <AutoComplete
              options={userSkills}
              value={skills}
              handleChange={(_event, value) => setSkills(value ? value : "")}
              placeholder="Search Skills"
              data-testid="skill"
            />
          </Box>

          <Icon name="mapPin" className={classes.inputIcon} />
          <AutoComplete
            options={jobLocations}
            value={location}
            handleChange={(_event, value) => setLocation(value ? value : "")}
            placeholder="Location"
            data-testid="location"
          />

          <IconButton
            data-testid="searchbutton"
            className={classes.icon}
            onClick={handleClick}
          >
            <Icon name="search" />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
};

export default SearchBar;
