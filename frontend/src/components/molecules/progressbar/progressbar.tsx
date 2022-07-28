import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  stepper: {
    width: "55%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    pt: 2,
    flex: "1 1 auto",
    marginTop: "30px",
  },
  nextBtn: {
    mr: 1,
    width: "140px",
    height: "46px",
    borderRadius: "8px",
    backgroundColor: theme.palette.primary[400],
  },
  backBtn: {
    mr: 1,
    width: "140px",
    height: "46px",
    borderRadius: "8px",
    color: theme.palette.primary[400],
  },
  stepperlabel: {
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary[300],
      width: "40px",
      height: "40px",
    },
    "& .MuiStepIcon-root.Mui-completed": {
      color: theme.palette.primary[300],
    },
    "& .MuiStepIcon-root.Mui-active": {
      color: theme.palette.primary[300],
    },
    "& .MuiStepIcon-text": {
      fill: "white",
      width: "7px",
      height: "24px",
    },
  },
});

const steps = ["Your Location", "Job location", "Your Skills"];

const Progressbar = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState<{
    [k: number]: boolean;
  }>({});

  const handleNext = () => {
    let newActiveStep;
    if (activeStep === 3) {
      newActiveStep = 0;
    } else {
      newActiveStep = activeStep + 1;
    }
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const classes = useStyles();
  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        connector={null}
        className={classes.stepper}
        sx={{ direction: "row" }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton className={classes.stepperlabel}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>

      <React.Fragment>
        <Box className={classes.btn}>
          {activeStep !== 0 && (
            <Button
              variant="outlined"
              onClick={handleBack}
              className={classes.backBtn}
              data-testid="backBtn"
            >
              Back
            </Button>
          )}
          &nbsp;
          <Button
            className={classes.nextBtn}
            data-testid="nextBtn"
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default Progressbar;
