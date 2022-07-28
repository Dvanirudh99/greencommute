import { Box, Stack } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../../organisms/header/Header";
import SideMenu from "../../organisms/sidemenu/SideMenu";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  menu: {
    width: "274px",
    minHeight: "56.25rem",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.palette.grey[100],
  },
});

const HeaderSidemenu = (props: any) => {
  const classes = useStyles();
  return (
    <Stack>
      <Header />
      <Box className={classes.box}>
        <Box component="div" className={classes.menu}>
          <SideMenu labelNo={props.labelNo} />
        </Box>
        {props.children}
      </Box>
    </Stack>
  );
};

export default HeaderSidemenu;
