import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { theme } from "../../../themes/Theme";
import Icon, { IconPropsType } from "../../atoms/icon/Icon";

export interface SideMenuPropsType {
  iconName: IconPropsType["name"];
  label: string;
  isActive?: boolean;
}

const useStyles = makeStyles({
  box: {
    display: "flex",
    gap: "12px",
    height: "48px",
    alignItems: "center",
    // background: theme.palette.structural.white,
  },
  icon: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  idle: {
    backgroundColor: theme.palette.grey[100],
  },
  active: {
    backgroundColor: theme.palette.structural?.color1,
  },
});

const SideMenu = ({ iconName, label, isActive }: SideMenuPropsType) => {
  const classes = useStyles();
  return (
    <Box className={classes.box} data-testid="side-menu">
      <span
        className={
          isActive
            ? `${classes.icon} ${classes.active}`
            : `${classes.icon} ${classes.idle}`
        }
      >
        <Icon name={iconName} />
      </span>
      <Typography variant="body2" color="text.primary" data-testid="text">
        {label}
      </Typography>
    </Box>
  );
};

export default SideMenu;
