import { Button, Grid, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import ApplyJobsService from "../../../api-service/applyjobs-service/ApplyJobsService";
import SaveJobsService from "../../../api-service/savejobs-service/SaveJobsService";
import { SaveJobsType } from "../../../Constants";
import { SavedJobsContext } from "../../../Store";
import { theme } from "../../../themes/Theme";
import Icon from "../../atoms/icon/Icon";
import Logo, { LogosType } from "../../atoms/logo/Logo";
import FileUpload from "../fileUpload/FileUpload";
import FileUploadSuccess from "../fileUploadSuccess/FileUploadSuccess";
const useStyles = makeStyles({
  boxRoot: {
    backgroundColor: theme.palette.structural.white,
  },
  buttons: {
    display: "flex",
    gap: "0.5rem",
    "& button": {
      padding: "8px 32px",
      borderRadius: "8px",
      textTransform: "capitalize",
    },
  },
  save: {
    color: theme.palette.primary["300"],
  },
  apply: {
    backgroundColor: theme.palette.primary["400"],
  },
  more: {
    marginLeft: "auto",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export interface CommonCardHeaderProps {
  jobId: number;
  jobDescription: string;
  companyName: string;
  companyLogo: LogosType["name"];
  location: string;
  timePosted: string;
}

export const CommonCardHeader = ({
  jobId,
  jobDescription,
  companyLogo,
  companyName,
  location,
  timePosted,
}: CommonCardHeaderProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const { savedJobs, setSavedJobs } = useContext(SavedJobsContext);
  const [appliedJobs, setAppliedJobs] = useState<SaveJobsType[]>([]);
  const applyJob = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    await SaveJobsService.postSaveJobs(jobId);
    loadSavedJobs();
  };
  const handleUnsave = async () => {
    await SaveJobsService.deleteSaveJobs(jobId);
    loadSavedJobs();
  };
  const loadSavedJobs = async () => {
    const jobs: SaveJobsType[] = await SaveJobsService.getSaveJobs();
    setSavedJobs(jobs);
  };

  const loadAppliedJobs = async () => {
    const appliedJobsTemp: SaveJobsType[] =
      await ApplyJobsService.getAppliedJobs();
    setAppliedJobs(appliedJobsTemp);
  };

  const handleApply = async () => {
    await ApplyJobsService.postApplyJobs(jobId);
    loadAppliedJobs();
  };

  useEffect(() => {
    loadAppliedJobs();
  }, [jobId]);

  return (
    <Grid
      container
      spacing={2}
      data-testid="common-card-header"
      className={classes.boxRoot}
    >
      <Grid item>
        <Logo name={companyLogo} />
      </Grid>
      <Grid item xs={8} lg={9} container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {jobDescription}
            </Typography>
            <Typography variant="caption2" gutterBottom component="p">
              {companyName}
            </Typography>
            <Typography variant="caption2" color="text.secondary">
              {location}
            </Typography>
            <Grid item>
              <Typography variant="caption1" color="text.secondary">
                {timePosted}
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.buttons}>
            <Button
              variant="outlined"
              className={classes.save}
              onClick={
                savedJobs.findIndex((job) => job.jobId === jobId) === -1
                  ? handleSave
                  : handleUnsave
              }
              data-testid="button-save"
            >
              <Typography variant="caption1">
                {savedJobs.findIndex((job) => job.jobId === jobId) === -1
                  ? "save"
                  : "unsave"}
              </Typography>
            </Button>
            <Button
              variant="contained"
              className={classes.apply}
              onClick={applyJob}
              data-testid="button-apply"
            >
              <Typography variant="caption1">
                {appliedJobs.findIndex((job) => job.jobId === jobId) !== -1
                  ? "Applied"
                  : "Apply"}
              </Typography>
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
              className={classes.modal}
            >
              <>
                {appliedJobs.findIndex((job) => job.jobId === jobId) === -1 ? (
                  <FileUpload
                    handleClose={handleClose}
                    handleUpload={handleApply}
                  />
                ) : (
                  <FileUploadSuccess handleClose={handleClose} />
                )}
              </>
            </Modal>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.more}>
        <Icon name="more" />
      </Grid>
    </Grid>
  );
};
