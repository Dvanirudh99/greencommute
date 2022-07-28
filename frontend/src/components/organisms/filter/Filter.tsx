import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Grid,
  Modal,
  RadioGroup,
  Typography,
  IconButton,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { theme } from "../../../themes/Theme";
import {
  GREEN_COMMUTE_OPTION,
  FilterItem,
  messages,
  FilteredJobs,
} from "../../../Constants";
import CheckboxItem from "../../molecules/checkboxes/CheckBoxItem";
import FilterButton from "../../molecules/filterButton/FilterButton";
import Icon from "../../atoms/icon/Icon";
import { useRecoilState } from "recoil";
import {
  applyState,
  datePostedState,
  distanceState,
  experienceState,
  JobLocationsContext,
  jobTypeState,
  transportState,
  UserSkillsContext,
} from "../../../Store";
import JobsService from "../../../api-service/jobs-service/JobsService";
import { JobsContext } from "../../pages/findJobsPage/FindJobsPage";
import axios from "axios";

/**
 * @author Arthi Aneel <arthi.aneel@zemosolabs.com>
 */
const useStyles = makeStyles({
  closeOuter: {
    textAlign: "right",
    marginTop: "28px",
    marginRight: "28px",
  },
  close: {
    cursor: "pointer",
  },
  chips: {
    width: "571px",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "5px",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "546px",
    height: "500px",
    backgroundColor: theme.palette.structural.white,
    boxShadow: "24px",
    borderRadius: "8px",
    padding: "20px",
  },
  button: {
    borderRadius: "8px",
    padding: "8px 32px 8px 32px",
    left: "260px",
    "&.Button-contained": {
      backgroundColor: theme.palette.primary[400],
      color: "white",
    },
    "&.Button-text": {
      color: theme.palette.primary[400],
    },
    textTransform: "capitalize",
  },
});

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const [_apply, setApply] = useRecoilState(applyState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setApply(false);
  };
  const [filterJobs, setFilterJobs] = useState<FilteredJobs[]>([]);
  const [distance, setDistance] = useRecoilState(distanceState);
  const [jobType, setJobType] = useRecoilState(jobTypeState);
  const [experience, setExperience] = useRecoilState(experienceState);
  const [datePosted, setDatePosted] = useRecoilState(datePostedState);
  const [transport, setTransport] = useRecoilState(transportState);
  const { setJobs } = React.useContext(JobsContext);
  const { jobLocations } = React.useContext(JobLocationsContext);
  const { userSkills } = React.useContext(UserSkillsContext);

  const classes = useStyles();
  const handleChange = (event: any) => {
    GREEN_COMMUTE_OPTION[0].checked = true;
    GREEN_COMMUTE_OPTION[1].checked = false;
  };

  const changeChecked = (
    position: number,
    array: FilterItem[],
    arrayName: string
  ) => {
    let newArr = [...array];
    newArr.forEach((item, index) => {
      if (index === position) {
        item.checked = item.checked ? false : true;
      }
    });
    if (arrayName === "distance") setDistance(newArr);
    if (arrayName === "datePosted") setDatePosted(newArr);
    if (arrayName === "jobType") setJobType(newArr);
    if (arrayName === "experience") setExperience(newArr);
    if (arrayName === "transport") setTransport(newArr);
  };
  const filterRecommendedJobs = (recommendedJobs: FilteredJobs[]) => {
    recommendedJobs = recommendedJobs.filter((job) =>
      jobLocations.find((jobLocation) =>
        job.address.toLowerCase().includes(jobLocation)
      )
    );
    recommendedJobs = recommendedJobs.filter((job) =>
      userSkills.find((userSkill) => job.skill.includes(userSkill))
    );
    setFilterJobs(recommendedJobs);
  };
  const loadJobs = async () => {
    const recommendedJobs: FilteredJobs[] = await JobsService.getJobs();
    filterRecommendedJobs(recommendedJobs);
  };
  useEffect(() => {
    loadJobs();
  }, []);

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
  };

  const handleApply = () => {
    setApply(true);
    setOpen(false);
    const filteredJobs: FilteredJobs[] = filterJobs.filter((job) =>
      distance.find(
        (item) => item.label === job.distance && item.checked === true
      )
    );
    setJobs(filteredJobs);
  };

  return (
    <Box data-testid="filter">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FilterButton
          title="Filter"
          handleClick={handleOpen}
          iconName="filter"
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container className={classes.content}>
          <Grid item xs={4}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {messages.DISTANCE}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color={theme.palette.text.secondary}
            >
              {distance.map((distanceName, i) => {
                return (
                  <CheckboxItem
                    data-testid="check"
                    defaultChecked={distanceName.checked}
                    label={distanceName.label}
                    key={i}
                    changeChecked={() => changeChecked(i, distance, "distance")}
                  />
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {messages.DATE_POSTED}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color={theme.palette.text.secondary}
            >
              {datePosted.map((dateName, i) => {
                return (
                  <CheckboxItem
                    defaultChecked={dateName.checked}
                    label={dateName.label}
                    key={i}
                    changeChecked={() =>
                      changeChecked(i, datePosted, "datePosted")
                    }
                  />
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body1"
              color={theme.palette.text.primary}
              sx={{ flexDirection: "row" }}
            >
              {messages.GREEN_COMMUTE}
              <IconButton aria-label="close" onClick={handleClose}>
                <Icon name="close" />
              </IconButton>
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color={theme.palette.text.secondary}
            >
              <RadioGroup name="use-radio-group" defaultValue="first">
                <FormControlLabel
                  value="first"
                  label={GREEN_COMMUTE_OPTION[0].label}
                  checked={GREEN_COMMUTE_OPTION[0].checked}
                  onChange={handleChange}
                  control={
                    <Radio
                      sx={{
                        color: theme.palette.grey[400],
                        "&.Mui-checked": {
                          color: theme.palette.primary[400],
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="second"
                  label={GREEN_COMMUTE_OPTION[1].label}
                  checked={GREEN_COMMUTE_OPTION[1].checked}
                  onChange={handleChange}
                  control={
                    <Radio
                      sx={{
                        color: theme.palette.grey[400],
                        "&.Mui-checked": {
                          color: theme.palette.primary[400],
                        },
                      }}
                    />
                  }
                />
              </RadioGroup>
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {messages.JOB_TYPE}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color={theme.palette.text.secondary}
            >
              {jobType.map((jobName, i) => {
                return (
                  <CheckboxItem
                    defaultChecked={jobName.checked}
                    label={jobName.label}
                    key={i}
                    changeChecked={() => changeChecked(i, jobType, "jobType")}
                  />
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {messages.EXPERIENCE_LEVEL}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color={theme.palette.text.secondary}
            >
              {experience.map((expName, i) => {
                return (
                  <CheckboxItem
                    defaultChecked={expName.checked}
                    label={expName.label}
                    key={i}
                    changeChecked={() =>
                      changeChecked(i, experience, "experience")
                    }
                  />
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color={theme.palette.text.primary}>
              {messages.TRANSPORT}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color={theme.palette.text.secondary}
            >
              {transport.map((transportName, i) => {
                return (
                  <CheckboxItem
                    defaultChecked={transportName.checked}
                    label={transportName.label}
                    key={i}
                    changeChecked={() =>
                      changeChecked(i, transport, "transport")
                    }
                  />
                );
              })}
            </Typography>
          </Grid>
          <Box sx={{ justifyContent: "flex-end" }}>
            <Button
              data-testid="clearbutton"
              className={classes.button}
              onClick={clearAll}
              variant="text"
              sx={{ color: theme.palette.primary[400] }}
            >
              {messages.CLEAR_ALL}
            </Button>
            <Button
              data-testid="button-apply"
              className={classes.button}
              onClick={handleApply}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary[400],
                color: "white",
              }}
            >
              {messages.APPLY}
            </Button>
          </Box>
        </Grid>
      </Modal>
    </Box>
  );
};

export default Filter;
