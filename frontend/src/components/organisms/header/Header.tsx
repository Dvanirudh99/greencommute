import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Box, FormControl, Input, InputAdornment } from "@mui/material";
import Logo from "../../atoms/logo/Logo";
import Icon from "../../atoms/icon/Icon";
import { theme } from "../../../themes/Theme";
import { UserLocationContext } from "../../../Store";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.primary[600],
    padding: "20px 30px",
    gap: "2rem",
    position: "sticky",
    zIndex: 1,
    top: "0px",
    [theme.breakpoints.down(860)]: {
      overflow: "hidden",
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  location: {
    color: "white",
    borderBottom: "1px solid white",
    marginLeft: "9rem",
    maxWidth: "20%",
    "& .MuiInput-root": {
      color: theme.palette.structural.white,
      "& svg": {
        stroke: theme.palette.structural.white,
      },
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    gap: "1.5rem",
    color: theme.palette.structural.white,
    "& svg": {
      cursor: "pointer",
    },
  },
  logo: {
    fill: "white",
  },
});
const Header = () => {
  const classes = useStyles();
  const { userLocation } = React.useContext(UserLocationContext);
  return (
    <Box className={classes.root} data-testid="header">
      <Link to="/">
        <Logo name={"greenCommute"} className={classes.logo} />
      </Link>
      <FormControl fullWidth variant="standard" className={classes.location}>
        <Input
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <Icon name="mapPin" />
            </InputAdornment>
          }
          value={userLocation}
        />
      </FormControl>
      <Box className={classes.icons}>
        <Icon name={"message"} />
        <Icon name={"notifications"} />
        <Logo name={"avatar"} />
      </Box>
    </Box>
  );
};

export default Header;
