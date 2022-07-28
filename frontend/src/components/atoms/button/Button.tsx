import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes/Theme";
const useStyles = makeStyles({
  btn: {
    width: "fit-content",
    height: "46px",
    radius: "8px",
    paddingLeft: "50px",
    paddingRight: "50px",
    textTransform: "capitalize",
    "&.MuiButton-text": {
      color: theme.palette.primary[400],
    },
    "&.MuiButton-contained": {
      backgroundColor: theme.palette.primary[400],
      color: "white",
    },
    "&.MuiButton-outlined": {
      color: theme.palette.primary[400],
    },
  },
});
interface Ibuttonprops extends ButtonProps {}
const Button = (props: Ibuttonprops) => {
  const classes = useStyles();
  return (
    <MuiButton
      className={classes.btn}
      variant={props.variant}
      size={props.size}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
