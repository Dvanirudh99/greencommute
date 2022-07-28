import { Box, Divider, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { messages, MODES_OF_TRAVEL } from "../../../Constants";
import { theme } from "../../../themes/Theme";
import Icon from "../../atoms/icon/Icon";
import { BusRoutes } from "./BusRoutes";
import { CabRoutes } from "./CabRoutes";
import { MetroRoute } from "./MetroRoute";
import { LogosType } from "../../atoms/logo/Logo";
import { CommonCardHeader } from "../../molecules/commoncardheader/CommonCardHeader";

const useStyles = makeStyles({
  boxRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1.5rem",
    maxWidth: "410px",
    background: theme.palette.structural.white,
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 0.5rem",
    },
  },
  route: {
    marginTop: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  navigation: {
    padding: "1rem",
    boxShadow: " 0px 2px 8px rgba(125, 125, 125, 0.12)",
    borderRadius: "8px",
  },
  location: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    "& .pin svg": {
      stroke: theme.palette.accent.color1,
    },
  },
  swap: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "2rem",
    color: theme.palette.text.secondary,
    marginLeft: "10px",
    borderLeft: `5px dotted ${theme.palette.grey[400]}`,
  },
  modesOfTravel: {
    marginTop: "1rem",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
    color: theme.palette.text.disabled,
    height: "40px",
  },
  mode: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  activeMode: {
    backgroundColor: theme.palette.primary[400],
    color: theme.palette.structural.white,
  },
});

interface RoutesProps {
  source: string;
  destination: string;
  jobInfo: {
    jobId: number;
    jobDescription: string;
    companyLogo: LogosType["name"];
    companyName: string;
    location: string;
    timePosted: string;
  };
  handleClick: (event: any) => void;
}

export const JobRoutes = ({
  source,
  destination,
  jobInfo,
  handleClick,
}: RoutesProps) => {
  const classes = useStyles();

  const [activeMode, setActiveMode] = React.useState("bus");

  const toggleModeClick = (mode: string) => {
    setActiveMode(mode);
  };

  const getRouteUi = () => {
    if (activeMode === "bus") {
      return <BusRoutes />;
    } else if (activeMode === "cab") {
      return <CabRoutes />;
    }
    return <></>;
  };
  return (
    <Box className={classes.boxRoot} data-testid="routes">
      <CommonCardHeader {...jobInfo} />

      <Divider variant="fullWidth" sx={{ marginTop: "2rem" }} />

      <Box className={classes.route}>
        <IconButton data-testid="backbutton" onClick={handleClick}>
          <Icon name="back" />
        </IconButton>
        <Typography variant="body1" color="text.primary">
          {messages.ROUTES_LABEL}
        </Typography>
      </Box>

      <Box className={classes.navigation}>
        <Box className={classes.location}>
          <Icon name="current" />
          <Typography variant="caption2">{source}</Typography>
        </Box>
        <Box className={classes.swap}>
          <Icon name="swap" />
        </Box>
        <Box className={classes.location}>
          <span className="pin">
            <Icon name="mapPin" />
          </span>
          <Typography variant="caption2">{destination}</Typography>
        </Box>
      </Box>

      <Box className={classes.modesOfTravel}>
        {MODES_OF_TRAVEL.map((modeItem) => {
          const classRequired =
            modeItem.mode !== activeMode
              ? `${classes.mode}`
              : `${classes.mode} ${classes.activeMode}`;
          return (
            <Box
              key={modeItem.mode}
              className={classRequired}
              onClick={() => toggleModeClick(modeItem.mode)}
              data-testid={`toggle-${modeItem.mode}`}
            >
              <Icon name={modeItem.iconName} />
            </Box>
          );
        })}
      </Box>
      <Divider variant="fullWidth" />
      <MetroRoute cost={100} distance="25 Kms" duration="1 hr 20 mins" />
      {getRouteUi()}
    </Box>
  );
};
