import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Icon, { IconPropsType } from "../../atoms/icon/Icon";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  button: {
    borderRadius: "32px",
    width: "137px",
    height: "56px",
    padding: "16px 32px 16px 32px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.structural.white,
    textTransform: "none",
    whiteSpace: "normal",
    flexWrap: "wrap",
    overflow: "hidden",
  },
});
interface FilterButtonPropsType {
  handleClick: (event: any) => void;
  iconName: IconPropsType["name"];
  title: string;
}

const FilterButton = ({
  handleClick,
  iconName,
  title,
}: FilterButtonPropsType) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      data-testid="filterbutton"
      startIcon={<Icon name={iconName} />}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};
export default FilterButton;
