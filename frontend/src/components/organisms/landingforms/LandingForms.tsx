import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { theme } from "../../../themes/Theme";
import { Grid, StepLabel, Typography } from "@mui/material";
import UserLocation from "./UserLocation";
import Illustration from "../../atoms/illustrations/Illustration";
import { Link } from "react-router-dom";
import {
  messages,
  JobLocationsType,
  STEPS,
  FilteredJobs,
} from "../../../Constants";
import JobLocation from "./JobLocation";
import { ShapeWithNumber } from "../../atoms/shapewithnumber/ShapeWithNumber";
import Skills from "./Skills";
import {
  JobLocationsContext,
  UserSkillsContext,
  UserLocationContext,
} from "../../../Store";
import { LocationsContext } from "../../pages/landingpage/LandingPage";
import JobsService from "../../../api-service/jobs-service/JobsService";

const useStyles = makeStyles({
  boxRoot: {
    width: "100%",
  },
  stepper: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    paddingTop: "4rem",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
    marginTop: "2.25rem",
    gap: "1rem",
  },
  nextBtn: {
    mr: 1,
    width: "140px",
    height: "46px",
    borderRadius: "8px",
    backgroundColor: theme.palette.primary[400],
    textTransform: "capitalize",
  },
  backBtn: {
    mr: 1,
    width: "140px",
    height: "46px",
    borderRadius: "8px",
    color: theme.palette.primary[400],
    textTransform: "capitalize",
  },
  skipBtn: {
    marginTop: "6.25rem",
    textDecoration: "underline",
    textUnderlineOffset: "0.2rem",
    textDecorationColor: theme.palette.primary[400],
    textDecorationThickness: "0.18rem",
    textTransform: "capitalize",
  },
  stepperlabel: {
    "& .MuiSvgIcon-root": {
      height: "40px",
      width: "40px",
      color: theme.palette.grey["300"],
    },
    "& .MuiStepIcon-root.Mui-active": {
      color: theme.palette.primary[300],
    },
    "& .Mui-active .MuiStepIcon-text": {
      fill: theme.palette.structural.white,
    },
    "& .Mui-active ,& .Mui-completed": {
      color: theme.palette.primary["300"],
    },
    "& .MuiStepIcon-text": {
      fill: theme.palette.text.primary,
      lineHeight: "24px",
      fontWeight: "500",
    },
  },
  formContainer: {
    marginTop: "5rem",
  },
  aqiGrid: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
  },
  info: {
    width: "320px",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
});

const LandingForms = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { userLocation } = React.useContext(UserLocationContext);
  const { jobLocations } = React.useContext(JobLocationsContext);
  const { userSkills } = React.useContext(UserSkillsContext);
  const { locations } = React.useContext(LocationsContext);
  const [jobCount, setJobCount] = React.useState<number>(0);

  const handleNext = () => {
    let newActiveStep;
    if (activeStep === 2) {
      newActiveStep = 0;
    } else {
      newActiveStep = activeStep + 1;
    }
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const classes = useStyles();

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <UserLocation />;
      case 1:
        return <JobLocation />;
      case 2:
        return <Skills />;
    }
  };

  const UserLocationImage = () => {
    const index = locations.findIndex(
      (location) => location.address === userLocation.toLowerCase()
    );
    if (index === -1) {
      return (
        <>
          <Illustration name="stay" />
          <Typography variant="h3" className={classes.info}>
            {messages.LOCATION_INFO}
          </Typography>
        </>
      );
    }

    return (
      <>
        <ShapeWithNumber label={locations[index].aqi} />
        <Typography variant="h3" className={classes.info}>
          {messages.AQI_INFO}
        </Typography>
      </>
    );
  };

  const JobLocationImage = () => {
    if (jobLocations.length === 0) {
      return (
        <>
          <Illustration name="work" />
          <Typography variant="h3" className={classes.info}>
            {messages.LOCATION_INFO}
          </Typography>
        </>
      );
    }

    return (
      <>
        {jobLocations.map((item) => {
          const cityInfo = locations.find(
            (element) => element.address === item
          ) as JobLocationsType;
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: theme.palette.accent.color1,
                gap: "2rem",
                textTransform: "capitalize",
              }}
              key={item}
            >
              <ShapeWithNumber label={cityInfo.aqi} />
              <Typography variant="h2">{cityInfo.address}</Typography>
            </Box>
          );
        })}

        <Typography variant="h3" className={classes.info}>
          {messages.AQI_INFO}
        </Typography>
      </>
    );
  };

  const getJobCount = (jobsData: FilteredJobs[]) => {
    let count: number = 0;
    jobsData.forEach((job) => {
      jobLocations.forEach((jobLocation) => {
        if (job.address.toLowerCase().includes(jobLocation)) {
          userSkills.forEach((userSkill) => {
            if (job.skill.includes(userSkill)) count++;
          });
        }
      });
    });
    setJobCount(count);
  };

  const SkillsImage = () => {
    const loadJobs = async () => {
      const jobsData: FilteredJobs[] = await JobsService.getJobs();
      getJobCount(jobsData);
    };

    React.useEffect(() => {
      loadJobs();
    }, []);
    if (userSkills.length === 0) {
      return (
        <>
          <Illustration name="jobs" />
          <Typography variant="h3" className={classes.info}>
            {messages.SKILL_INFO}
          </Typography>
        </>
      );
    } else {
      return (
        <>
          <ShapeWithNumber label={jobCount} />
          <Typography variant="h3" className={classes.info}>
            Jobs found in{" "}
            {jobLocations.map((element, index) =>
              index !== jobLocations.length - 1 ? element + " , " : element
            )}
          </Typography>
        </>
      );
    }
  };

  const getStepImage = () => {
    switch (activeStep) {
      case 0: {
        return <UserLocationImage />;
      }
      case 1: {
        return <JobLocationImage />;
      }
      case 2: {
        return <SkillsImage />;
      }
    }
  };

  const getNextButton = () => {
    if (
      (userLocation.length > 0 && activeStep === 0) ||
      (jobLocations.length > 0 && activeStep === 1)
    ) {
      return (
        <Button
          className={classes.nextBtn}
          data-testid="nextBtn"
          variant="contained"
          onClick={handleNext}
        >
          Next
        </Button>
      );
    } else if (userSkills.length > 0 && activeStep === 2) {
      return (
        <Link to="/find-jobs" className={classes.link}>
          <Button
            className={classes.nextBtn}
            data-testid="nextBtn"
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          className={classes.nextBtn}
          data-testid="nextBtn"
          variant="contained"
        >
          Next
        </Button>
      );
    }
  };

  return (
    <Grid container className={classes.boxRoot} data-testid="landing-forms">
      <Grid item md={7}>
        <Stepper
          activeStep={activeStep}
          connector={null}
          className={classes.stepper}
        >
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel className={classes.stepperlabel}>
                <Typography variant="subtitle1" className="label">
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box className={classes.formContainer}>
          <Typography variant="h1">
            {messages.PEOPLE_INFO} <br /> {messages.GREEN_COMMUTE}
          </Typography>

          {getStepContent()}

          <Box className={classes.btn}>
            {activeStep !== 0 && (
              <Button
                variant="outlined"
                onClick={handleBack}
                className={classes.backBtn}
                data-testid="backBtn"
              >
                Back
              </Button>
            )}

            {getNextButton()}
          </Box>
          <Button
            className={classes.skipBtn}
            data-testid="skipBtn"
            variant="text"
          >
            Skip
          </Button>
        </Box>
      </Grid>
      <Grid item md={5} className={classes.aqiGrid}>
        {getStepImage()}
      </Grid>
    </Grid>
  );
};

export default LandingForms;
