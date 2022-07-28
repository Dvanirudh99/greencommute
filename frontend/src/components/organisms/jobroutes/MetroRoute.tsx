import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { messages } from "../../../Constants";
import { theme } from "../../../themes/Theme";
import Icon from "../../atoms/icon/Icon";

const useStyles = makeStyles({
  info: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  list: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    padding: "0px",
    margin: "0px",
    color: theme.palette.grey[400],
  },
  cost: {
    display: "flex",
    alignItems: "center",
  },
});

interface MetroRouteProps {
  cost: number;
  distance: string;
  duration: string;
}

export const MetroRoute = ({ cost, distance, duration }: MetroRouteProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.info} variant="body2" component="div">
        {messages.METRO_ROUTE_INFO}
      </Typography>
      <Box className={classes.list}>
        <Typography
          color="text.secondary"
          variant="caption2"
          className={classes.cost}
        >
          <Icon name="rupee" />
          {cost}
        </Typography>
        &#9679;
        <Typography color="text.secondary" variant="caption2">
          {distance}
        </Typography>
        &#9679;
        <Typography color="text.secondary" variant="caption2">
          {duration}
        </Typography>
      </Box>
    </>
  );
};
