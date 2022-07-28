import { makeStyles } from "@mui/styles";
import React from "react";
import { CHIP_LIST, messages } from "../../../Constants";
import { Box, Typography } from "@mui/material";
import Chip from "../chip/Chip";

const useStyles = makeStyles({
  box: {
    maxWidth: "570px",
    minWidth: "350px",
  },
  chips: {
    display: "flex",
    width: "552px",
    flexWrap: "wrap",
    gap: "8px",
    "&:click ": {
      display: "hidden",
    },
  },
  clear: {
    textDecorationLine: "underline",
    display: "flex",
    textDecorationThickness: "2px",
    align: "flex-end",
    textWrap: "wrap",
  },
});
interface JobDetailProps {
  handleDelete: (event: any) => void;
}

const JobDetail = ({ handleDelete }: JobDetailProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.box} data-testid="jobDetail">
      <Typography variant="h3">{messages.JOB_LIST}</Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ paddingBottom: "12px" }}
      >
        {messages.JOB_SEARCH}
      </Typography>
      <Typography variant="caption2" color="text.secondary">
        <Box sx={{ width: "600px" }}>
          <Box className={classes.chips}>
            {CHIP_LIST.map((chipName) => {
              return (
                <Chip
                  label={chipName}
                  handleDelete={handleDelete}
                  variant="filterChip"
                  key={chipName}
                />
              );
            })}
            <Typography
              color="primary.300"
              variant="body1"
              className={classes.clear}
            >
              {messages.CLEAR_ALL}
            </Typography>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
};
export default JobDetail;
