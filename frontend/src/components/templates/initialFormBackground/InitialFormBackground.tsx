import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { EXTRA_COLORS, theme } from "../../../themes/Theme";
import Logo from "../../atoms/logo/Logo";

const useStyles = makeStyles({
  main: {
    background: `linear-gradient(to right, white 58%, white) no-repeat left top, ${EXTRA_COLORS.background.linear1}`,
    backgroundSize: "58% 100%",
    height: "100vh",
    boxSizing: "border-box",
  },
  logoOuter: {
    paddingTop: "6.5rem",
    paddingLeft: "6.5rem",
  },
  logo: {
    fill: theme.palette.primary[500],
  },
});

const InitialFormBackground = (props: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.main} data-testid="initial-form-background">
      <Box className={classes.logoOuter}>
        <Logo name="greenCommute" className={classes.logo} />
      </Box>
      {props.children}
    </Box>
  );
};

export default InitialFormBackground;
