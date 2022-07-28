import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { messages } from "../../../Constants";
import { JobLocationsContext } from "../../../Store";
import { theme } from "../../../themes/Theme";
import Chip from "../../molecules/chip/Chip";
import { LocationsContext } from "../../pages/landingpage/LandingPage";

export const commonFormStyles = makeStyles({
  formInput: {
    marginTop: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderRadius: "none",
    },
    "& .MuiOutlinedInput-root": {
      border: `1px solid ${theme.palette.grey[200]}`,
      borderRadius: "0.5rem",
      color: theme.palette.text.disabled,
      fontWeight: "500",
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    "& input::placeholder": {
      color: theme.palette.text.primary,
      fontWeight: "500",
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
  },
});

export const chipFormStyles = makeStyles({
  chipForm: {
    marginTop: "4rem",
  },
  chipFormInput: {
    width: "400px",
  },
  formInput: {
    "& .MuiChip-root": {
      marginLeft: "2px",
    },
    "& .Mui-focused ": {
      border: `1px solid ${theme.palette.primary[200]}`,
    },
    "& .MuiChip-label": {
      paddingLeft: "0",
    },
  },
});

const JobLocation = () => {
  const { jobLocations, setJobLocations } =
    React.useContext(JobLocationsContext);
  const { locations } = React.useContext(LocationsContext);
  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    selectedJobLocations: string[]
  ) => {
    setJobLocations(selectedJobLocations);
  };
  const commonClasses = commonFormStyles();
  const classes = chipFormStyles();
  return (
    <Box className={classes.chipForm} data-testid="job-location-form">
      <Typography variant="subtitle1">{messages.JOB_LOCATION_LABEL}</Typography>
      <Box className={classes.chipFormInput}>
        <Autocomplete
          multiple
          id="tags-filled"
          options={locations.map((option) => option.address)}
          freeSolo
          value={jobLocations}
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip
                handleDelete={getTagProps({ index }).onDelete}
                variant="defaultChip"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          onChange={handleChange}
          clearIcon={null}
          renderInput={(params) => (
            <TextField
              className={`${commonClasses.formInput} ${classes.formInput}`}
              variant="outlined"
              placeholder={
                jobLocations.length === 0 ? "Enter your job location" : ""
              }
              {...params}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default JobLocation;
