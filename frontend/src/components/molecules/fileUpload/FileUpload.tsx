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
    zIndex: 1,
  },
  heading: {
    fontWeight: 600,
    fontSize: "22px",
    position: "relative",
    top: "-10px",
    left: "50px",
  },
  content: {
    width: "592px",
    border: `2px dashed ${theme.palette.primary[400]}`,
    borderRadius: "12px",
    marginLeft: "50px",
    height: "268px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.structural.color4,
  },
  button: {
    backgroundColor: theme.palette.primary[400],
    width: "281px",
    height: "40px",
    textTransform: "inherit",
  },
});

interface FileUploadPropsType {
  handleClose: (event: any) => void;
  handleUpload: () => void;
}

const FileUpload = ({ handleClose, handleUpload }: FileUploadPropsType) => {
  const classes = useStyles();
  const fileRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileRef !== undefined) {
      fileRef?.current?.click();
    }
  };
  const handleChange = () => {
    handleUpload();
  };
  return (
    <Box className={classes.modal} data-testid="file-upload">
      <Box className={classes.closeOuter}>
        <Icon name="close" className={classes.close} onClick={handleClose} />
      </Box>
      <Typography
        variant="h3"
        className={classes.heading}
        color="text.secondary"
      >
        {messages.FILE_UPLOAD}
      </Typography>
      <Box className={classes.content}>
        <Button
          variant="contained"
          onClick={handleClick}
          className={classes.button}
          data-testid="upload-button"
        >
          <Typography variant="caption1">{messages.CLICK_TO_UPLOAD}</Typography>
        </Button>
        <input
          ref={fileRef}
          onChange={handleChange}
          multiple={false}
          type="file"
          hidden
          data-testid="uploaddone"
        />
      </Box>
    </Box>
  );
};

export default FileUpload;
