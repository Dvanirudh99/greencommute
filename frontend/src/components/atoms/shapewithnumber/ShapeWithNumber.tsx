import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  shape: {
    backgroundImage: "url(/images/shape.svg)",
    backgroundRepeat: "no-repeat",
    height: "214px",
    width: "212px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "48px",
    lineHeight: "48px",
    color: theme.palette.primary[600],
  },
});

export const ShapeWithNumber = ({ label }: { label: number }) => {
  const classes = useStyles();
  return (
    <Box className={classes.shape} data-testid="ShapeWithNumber">
      <Typography className={classes.text}>{label}</Typography>
    </Box>
  );
};
