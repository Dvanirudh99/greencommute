import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import Icon from "../../atoms/icon/Icon";
import { messages } from "../../../Constants";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  modal: {
    height: "400px",
    width: "700px",
    borderRadius: "12px",
    border: "1px solid transparent",
    boxSizing: "border-box",
    backgroundColor: theme.palette.structural.white,
  },
  closeOuter: {
    textAlign: "right",
    marginTop: "28px",
    marginRight: "28px",
  },
  close: {
    cursor: "pointer",
  },
  content: {
    marginTop: "50px",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  tickIconOuter: {
    backgroundColor: theme.palette.primary[400],
    height: "83px",
    width: "83px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tickIcon: {
    fontSize: "65px",
    strokeWidth: "2px",
  },
  greet: {
    fontWeight: "600",
    display: "inline",
  },
  button: {
    backgroundColor: theme.palette.primary[400],
    width: "156px",
    height: "40px",
    borderRadius: "8px",
  },
});

interface FileUploadSuccessProps {
  handleClose: (event: any) => void;
}

const FileUploadSuccess = ({ handleClose }: FileUploadSuccessProps) => {
  const classes = useStyles();
  const user = "Satish";
  return (
    <Box className={classes.modal} data-testid="file-upload-success">
      <Box className={classes.closeOuter}>
        <Icon name="close" className={classes.close} onClick={handleClose} />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.tickIconOuter}>
          <Icon name="tick" className={classes.tickIcon} />
        </Box>
        <Typography variant="h3" color="text.primary">
          <Box className={classes.greet}>Hi {user}!</Box>{" "}
          {messages.FILE_UPLOAD_SUCCESS}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClose}
          data-testid="okay-button"
          className={classes.button}
        >
          Okay
        </Button>
      </Box>
    </Box>
  );
};

export default FileUploadSuccess;
