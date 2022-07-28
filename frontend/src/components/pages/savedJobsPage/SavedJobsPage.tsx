import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import HeaderSidemenu from "../../templates/headerSidemenu/HeaderSidemenu";
import { FilteredJobs, messages } from "../../../Constants";
import {
  JobLocationsContext,
  SavedJobsContext,
  UserLocationContext,
} from "../../../Store";
import JobsService from "../../../api-service/jobs-service/JobsService";
import JobCard from "../../organisms/jobCard/JobCard";
import { Link, useParams } from "react-router-dom";
import { JobRoutes } from "../../organisms/jobroutes/JobRoutes";
import JobDescription from "../../organisms/jobDescription/JobDescription";
const getStyles = makeStyles({
  savedJobs: {
    paddingLeft: "44px",
    paddingTop: "40px",
    width: "80%",
  },
  info: {
    paddingBottom: "1.3rem",
  },
  jobCards: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: "61.5rem",
    width: "100%",
    gap: "1rem",
    paddingBottom: "2rem",
    paddingRight: "1rem",
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
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1.5rem",
  },
});
/**
 * @author Mohammed Afreen <afreen@zemosolabs.com>
 * @author Nagavinay <nagavinay.chinthada@zemosolabs.com>
 * @author Anirudh <anirudh.dheram@zemosolabs.com>
 */
const SavedJobsPage = () => {
  const classes = getStyles();
  const [showGreenCommute, setShowGreenCommute] = React.useState(false);
  const { userLocation } = React.useContext(UserLocationContext);
  const { jobLocations } = React.useContext(JobLocationsContext);
  const [jobs, setJobs] = React.useState<FilteredJobs[]>([]);
  const { savedJobs } = React.useContext(SavedJobsContext);
  const { id } = useParams();
  const jobId = Number(id);
  const handleClick = () => {
    setShowGreenCommute(true);
  };
  const handleBack = () => {
    setShowGreenCommute(false);
  };
  const loadJobs = async () => {
    const jobsData: FilteredJobs[] = await JobsService.getJobs();
    setJobs(jobsData);
  };
  const getSavedJobs = () => {
    return (
      <>
        {jobs.length > 0 &&
          savedJobs.map((savedJob) => {
            const job: FilteredJobs = jobs.find(
              (jobItem) => jobItem.id === savedJob.jobId
            ) as FilteredJobs;
            return (
              <Link
                to={`/saved-jobs/${job.id}`}
                key={job.id}
                className={classes.link}
                data-testid={`saved-card-link-${job.id}`}
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
  const getJobDescriptionCard = () => {
    const jobIdInfo: FilteredJobs = jobs.find(
      (job) =>
        job.id === jobId &&
        savedJobs.findIndex((savedJob) => savedJob.jobId === jobId) !== -1
    ) as FilteredJobs;
    return (
      <>
        {showGreenCommute
          ? jobIdInfo !== undefined && (
              <JobRoutes
                destination={jobLocations[0]}
                jobInfo={{
                  jobId: jobIdInfo.id,
                  companyLogo: jobIdInfo.company,
                  companyName: jobIdInfo.company,
                  jobDescription: jobIdInfo.role,
                  location: jobIdInfo.address,
                  timePosted: jobIdInfo.history,
                }}
                source={userLocation}
                handleClick={handleBack}
              />
            )
          : jobIdInfo !== undefined && (
              <JobDescription
                jobId={jobIdInfo.id}
                handleClick={handleClick}
                jobdescription={jobIdInfo.role}
                companyName={jobIdInfo.company}
                companyLogo={jobIdInfo.company}
                location={jobIdInfo.address}
                timePosted={jobIdInfo.history}
              />
            )}
      </>
    );
  };

  React.useEffect(() => {
    loadJobs();
  }, []);
  return (
    <HeaderSidemenu labelNo={2} data-testid="Headerside-menu">
      <Box className={classes.savedJobs} data-testid="saved-jobs">
        <Typography variant="h3" color="text.primary" className={classes.info}>
          {messages.SAVED_JOBS}
        </Typography>
        <Box className={classes.cards}>
          <Box className={classes.jobCards}>{getSavedJobs()}</Box>
          <Box className={classes.jobDescriptionCard}>
            {getJobDescriptionCard()}
          </Box>
        </Box>
      </Box>
    </HeaderSidemenu>
  );
};

export default SavedJobsPage;
