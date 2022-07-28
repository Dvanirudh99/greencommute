import { Box, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { theme } from "../../../themes/Theme";
import { messages } from "../../../Constants";
import { commonFormStyles } from "./JobLocation";
import { UserLocationContext } from "../../../Store";

const useStyles = makeStyles({
  userLocationForm: {
    marginTop: "4rem",
  },
  userLocationInput: {
    width: "400px",
  },
  formInput: {
    "& .Mui-focused ": {
      border: `1px solid ${theme.palette.primary[200]}`,
    },
  },
});

const UserLocation = () => {
  const { userLocation, setUserLocation } =
    React.useContext(UserLocationContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLocation(event.target.value);
  };
  const commonClasses = commonFormStyles();
  const classes = useStyles();
  return (
    <Box className={classes.userLocationForm} data-testid="user-location-form">
      <Typography variant="subtitle1">
        {messages.USER_LOCATION_LABEL}
      </Typography>
      <Box className={classes.userLocationInput}>
        <TextField
          className={`${commonClasses.formInput} ${classes.formInput}`}
          variant="outlined"
          placeholder={"Enter your location"}
          fullWidth
          onChange={handleChange}
          value={userLocation}
          name="userLocation"
        />
      </Box>
    </Box>
  );
};

export default UserLocation;
