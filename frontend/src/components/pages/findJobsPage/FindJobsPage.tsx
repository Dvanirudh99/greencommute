import { Box, Typography, Grid } from "@mui/material";
import React, { createContext, useMemo } from "react";
import { makeStyles } from "@mui/styles";
import SearchBar from "../../organisms/searchbar/SearchBar";
import HeaderSidemenu from "../../templates/headerSidemenu/HeaderSidemenu";
import { FilteredJobs, FilterItem, messages } from "../../../Constants";
import JobsService from "../../../api-service/jobs-service/JobsService";
import RecommendedCard from "../../organisms/recommendedCard/RecommendedCard";
import {
  applyState,
  datePostedState,
  distanceState,
  experienceState,
  JobLocationsContext,
  jobTypeState,
  transportState,
  UserLocationContext,
  UserSkillsContext,
} from "../../../Store";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobCard from "../../organisms/jobCard/JobCard";
import JobDescription from "../../organisms/jobDescription/JobDescription";
import { JobRoutes } from "../../organisms/jobroutes/JobRoutes";
import Filter from "../../organisms/filter/Filter";
import { useRecoilState } from "recoil";
import Chip from "../../molecules/chip/Chip";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  findJobs: {
    paddingLeft: "44px",
    paddingTop: "40px",
    width: "80%",
  },
  search: {
    display: "flex",
    flexDirection: "row",
  },
  searchBar: {
    paddingRight: "11px",
  },
  findjobsText: {
    paddingBottom: "8px",
    height: "30px",
  },
  heading1: {
    paddingTop: "36px",
    paddingBottom: "4px",
    height: "30px",
  },
  heading2: {
    paddingBottom: "20px",
  },
  recommendedCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "80rem",
    gap: "1rem",
  },
  jobCards: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: "61.5rem",
    width: "100%",
    gap: "1rem",
    paddingBottom: "2rem",
  },
  jobDescriptionCard: {
    maxWidth: "450px",
    width: "100%",
    paddingBottom: "2rem",
  },
  link: {
    textDecoration: "none",
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "1.5rem",
  },
  chips: {
    maxWidth: "61.5rem",
    display: "flex",
    alignItems: "flex-start",
    "& p": {
      color: theme.palette.primary[300],
      cursor: "pointer",
      marginTop: "0.5rem",
      borderBottom: `1px solid  ${theme.palette.primary[300]}`,
    },
    "& .MuiChip-root": {
      marginLeft: "0.5rem",
      marginTop: "0.5rem",
    },
  },
});
const jobsArray: FilteredJobs[] = [];

export const JobsContext = createContext({
  jobs: jobsArray,
  setJobs: (_value: FilteredJobs[]) => {
    /*function in context */
  },
});
/**
 * @author Mohammed Afreen <afreen@zemosolabs.com>
 * @author Nagavinay <nagavinay.chinthada@zemosolabs.com>
 * @author Arthi Aneel <arthi.aneel@zemosolabs.com>
 * @author Sai Shankar Vemuganti <saishankar.vemuganti@zemosolabs.com>
 */
const FindJobsPage = () => {
  const classes = useStyles();
  const [jobs, setJobs] = React.useState<FilteredJobs[]>([]);
  const { userLocation } = React.useContext(UserLocationContext);
  const { jobLocations } = React.useContext(JobLocationsContext);
  const { userSkills } = React.useContext(UserSkillsContext);
  const jobsValue = useMemo(() => ({ jobs, setJobs }), [jobs]);
  const [greenCommute, setGreenCommute] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const jobId = Number(id);
  const [distance, setDistance] = useRecoilState(distanceState);
  const [jobType, setJobType] = useRecoilState(jobTypeState);
  const [experience, setExperience] = useRecoilState(experienceState);
  const [datePosted, setDatePosted] = useRecoilState(datePostedState);
  const [transport, setTransport] = useRecoilState(transportState);
  const [apply, setApply] = useRecoilState(applyState);

  const handleClick = () => {
    setGreenCommute(true);
  };
  const handleBack = () => {
    setGreenCommute(false);
  };
  const filterRecommendedJobs = (jobsData: FilteredJobs[]) => {
    jobsData = jobsData.filter((job) =>
      jobLocations.find((jobLocation) =>
        job.address.toLowerCase().includes(jobLocation)
      )
    );
    jobsData = jobsData.filter((job) =>
      userSkills.find((userSkill) => job.skill.includes(userSkill))
    );
    if (jobsData.length === 0) navigate("/");
    setJobs(jobsData);
  };
  const loadJobs = async () => {
    const jobsData: FilteredJobs[] = await JobsService.getJobs();
    filterRecommendedJobs(jobsData);
  };
  const handleDelete = (_e: FilterItem, i: number, index: number) => {
    let a: FilterItem[] = [];
    if (i == 0) {
      a = [...distance];
      a[index].checked = false;
      setDistance(a);
    } else if (i == 1) {
      a = [...jobType];
      a[index].checked = false;
      setJobType(a);
    } else if (i == 2) {
      a = [...experience];
      a[index].checked = false;
      setExperience(a);
    } else if (i == 3) {
      a = [...datePosted];
      a[index].checked = false;
      setDatePosted(a);
    } else if (i == 4) {
      a = [...transport];
      a[index].checked = false;
      setTransport(a);
    }
  };
  const clearAll = () => {
    let newDistanceArray = [...distance];
    newDistanceArray.forEach((distanceName) => {
      distanceName.checked = false;
    });
    setDistance(newDistanceArray);
    let newDateArray = [...datePosted];
    newDateArray.forEach((dateName) => {
      dateName.checked = false;
    });
    setDatePosted(newDateArray);
    let newExperienceArray = [...experience];
    newExperienceArray.forEach((expName) => {
      expName.checked = false;
    });
    setExperience(newExperienceArray);
    let newJobArray = [...jobType];
    newJobArray.forEach((jobName) => {
      jobName.checked = false;
    });
    setJobType(newJobArray);
    let newTransport = [...transport];
    newTransport.forEach((transportName) => {
      transportName.checked = false;
    });
    setTransport(newTransport);
    console.log(distance);
    setApply(false);
  };

  const getRecommendedJobs = () => {
    return (
      <>
        {jobs.length > 0 &&
          jobs.map((job) => {
            return (
              <Link
                to={`/find-jobs/${job.id}`}
                key={job.id}
                className={classes.link}
                data-testid={`recommended-card-link-${job.id}`}
              >
                <RecommendedCard
                  role={job.role}
                  company={job.company}
                  address={job.address}
                  routes={["bus", "bike", "train"]}
                  history={job.history}
                />
              </Link>
            );
          })}
      </>
    );
  };
  const getJobCards = () => {
    return (
      <>
        {jobs.length > 0 &&
          jobs.map((job) => {
            return (
              <Link
                to={`/find-jobs/${job.id}`}
                key={job.id}
                className={classes.link}
                data-testid={`job-card-link-${job.id}`}
              >
                <JobCard
                  role={job.role}
                  company={job.company}
                  address={job.address}
                  routes={["bus", "bike", "train"]}
                  history={job.history}
                  isActive={job.id === jobId}
                />
              </Link>
            );
          })}
      </>
    );
  };
  const getJobDescription = () => {
    const jobIdDetails: FilteredJobs = jobs.find(
      (job) => job.id === jobId
    ) as FilteredJobs;
    return (
      <>
        {greenCommute
          ? jobIdDetails !== undefined && (
              <JobRoutes
                destination={jobLocations[0]}
                jobInfo={{
                  jobId: jobIdDetails.id,
                  companyLogo: jobIdDetails.company,
                  companyName: jobIdDetails.company,
                  jobDescription: jobIdDetails.role,
                  location: jobIdDetails.address,
                  timePosted: jobIdDetails.history,
                }}
                source={userLocation}
                handleClick={handleBack}
              />
            )
          : jobIdDetails !== undefined && (
              <JobDescription
                jobId={jobIdDetails.id}
                handleClick={handleClick}
                jobdescription={jobIdDetails.role}
                companyName={jobIdDetails.company}
                companyLogo={jobIdDetails.company}
                location={jobIdDetails.address}
                timePosted={jobIdDetails.history}
              />
            )}
      </>
    );
  };
  React.useEffect(() => {
    loadJobs();
  }, []);
  return (
    <HeaderSidemenu labelNo={1} data-testid="Headerside-menu">
      <Box className={classes.findJobs} data-testid="find-jobs-page">
        <Typography
          variant="h3"
          color="text.primary"
          className={classes.findjobsText}
        >
          {messages.FIND_JOBS}
        </Typography>
        <JobsContext.Provider value={jobsValue}>
          <Box className={classes.search}>
            <Box className={classes.searchBar}>
              <SearchBar />
            </Box>
            <Filter />
          </Box>
        </JobsContext.Provider>
        {id === undefined ? (
          <Box>
            <Typography
              variant="h3"
              color="text.primary"
              className={classes.heading1}
              data-testid="recommended"
            >
              {messages.RECOMMENDED}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.heading2}
            >
              {messages.BASED_SKILL}
            </Typography>
            <Box className={classes.recommendedCards}>
              {getRecommendedJobs()}
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h3"
              color="text.primary"
              className={classes.heading1}
              data-testid="job-list"
            >
              {messages.JOB_LIST}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.heading2}
            >
              {messages.JOB_SEARCH}
            </Typography>
            {apply && (
              <Grid container className={classes.chips}>
                <Box sx={{ width: "80%" }}>
                  {distance.map((item, index) => {
                    return (
                      item.checked && (
                        <Chip
                          label={item.label}
                          handleDelete={() => handleDelete(item, 0, index)}
                          variant={"filterChip"}
                          key={index}
                        />
                      )
                    );
                  })}
                  {jobType.map((item, index) => {
                    return (
                      item.checked && (
                        <Chip
                          label={item.label}
                          handleDelete={() => handleDelete(item, 1, index)}
                          variant={"filterChip"}
                          key={index}
                        />
                      )
                    );
                  })}
                  {experience.map((item, index) => {
                    return (
                      item.checked && (
                        <Chip
                          label={item.label}
                          handleDelete={() => handleDelete(item, 2, index)}
                          variant={"filterChip"}
                          key={index}
                        />
                      )
                    );
                  })}
                  {datePosted.map((item, index) => {
                    return (
                      item.checked && (
                        <Chip
                          label={item.label}
                          handleDelete={() => handleDelete(item, 3, index)}
                          variant={"filterChip"}
                          key={index}
                        />
                      )
                    );
                  })}
                  {transport.map((item, index) => {
                    return (
                      item.checked && (
                        <Chip
                          label={item.label}
                          handleDelete={() => handleDelete(item, 4, index)}
                          variant={"filterChip"}
                          key={index}
                        />
                      )
                    );
                  })}
                </Box>

                <Box>
                  <Typography variant={"body1"} onClick={clearAll}>
                    Clear All
                  </Typography>
                </Box>
              </Grid>
            )}

            <Box className={classes.cards}>
              <Box className={classes.jobCards}>{getJobCards()}</Box>
              <Box className={classes.jobDescriptionCard}>
                {getJobDescription()}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </HeaderSidemenu>
  );
};

export default FindJobsPage;
