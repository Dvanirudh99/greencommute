import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { theme } from "../../../themes/Theme";
import Illustration from "../../atoms/illustrations/Illustration";

const useStyles = makeStyles({
  mapview: {
    margin: "1rem 0px",
  },
  googleMaps: {
    color: theme.palette.primary[600],
    cursor: "pointer",
  },
});

export const BusRoutes = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.mapview}>
        <Illustration name="mapview" />
      </Box>
      <Typography variant="caption1" className={classes.googleMaps}>
        View in Google Maps
      </Typography>
    </React.Fragment>
  );
};
