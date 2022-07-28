import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { messages } from "../../../Constants";
import { theme } from "../../../themes/Theme";
import Icon from "../../atoms/icon/Icon";
import { LogosType } from "../../atoms/logo/Logo";
import { CommonCardHeader } from "../../molecules/commoncardheader/CommonCardHeader";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1.5rem 1.5rem 1.5rem 1.5rem",
    maxWidth: "410px",
    background: theme.palette.structural.white,
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 0.5rem",
    },
  },
  instagram: {
    "& svg": {
      width: "35px",
      height: "35px",
    },
  },

  stack2: {
    width: "100%",
    maxWidth: "410px",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: "24px",
    top: "24px",
    height: "64px",
    flexWrap: "wrap",
    borderRight: "24px solid transparent",
    borderLeft: "24px solid transparent",
    boxShadow: "0px -2px 8px rgba(125, 125, 125, 0.12)",
    borderRadius: "0px 0px 12px 12px",
  },

  maintext: {
    height: "482px",
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    paddingLeft: "26px",
    flexDirection: "column",
  },
});

interface JobDescriptionProps {
  jobId: number;
  jobdescription: string;
  companyName: string;
  companyLogo: LogosType["name"];
  location: string;
  timePosted: string;
  handleClick: (event: any) => void;
}
const JobDescription = ({
  jobId,
  jobdescription,
  companyName,
  companyLogo,
  location,
  timePosted,
  handleClick,
}: JobDescriptionProps) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.card} data-testid="card">
        <CommonCardHeader
          jobId={jobId}
          jobDescription={jobdescription}
          companyName={companyName}
          companyLogo={companyLogo}
          location={location}
          timePosted={timePosted}
        />
        <Divider variant="fullWidth" sx={{ marginTop: "2rem" }} />
        <Box
          className={classes.maintext}
          component={"div"}
          sx={{ width: "360px" }}
        >
          <Box
            sx={{
              width: "354px",
            }}
          >
            <Typography variant="body1" color={"text.primary"}>
              {messages.DESCRIPTION}
            </Typography>
            <Typography
              variant="body2"
              color={"text.secondary"}
              sx={{ marginTop: "5px" }}
            >
              {messages.JOB_DETAIL}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "354px",
            }}
          >
            <Typography variant="body1" color={"text.primary"}>
              {messages.ABOUT_TITLE}
            </Typography>
            <Typography
              variant="body2"
              color={"text.secondary"}
              sx={{ marginTop: "5px" }}
            >
              {messages.ABOUT_COMPANY}
            </Typography>
            &nbsp;
            <Typography variant="body2" color={"text.secondary"}>
              {messages.SKILL_DETAILS}
              <Button
                variant="text"
                sx={{
                  color: "primary.400",
                  paddingLeft: "8px",
                }}
              >
                SEE MORE
              </Button>
            </Typography>
          </Box>
        </Box>
        <Stack
          className={classes.stack2}
          direction={"row"}
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "primary.400",
              variant: "subtitle1",
              fontWeight: "600",
            }}
            endIcon={<Icon name={"arrow"} color={"primary.400"} />}
            onClick={handleClick}
            data-testid="greenCommuteButton"
          >
            {messages.GREEN_COMMUTE_ROUTES}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default JobDescription;
