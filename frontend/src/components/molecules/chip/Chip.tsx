import * as React from "react";
import { Chip as MuiChip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Icon from "../../atoms/icon/Icon";
import { theme } from "../../../themes/Theme";

const useStyles = makeStyles({
  chip: {
    padding: "4px 12px 4px 12px",
    borderRadius: "8px",
    backgroundColor: theme.palette.structural.color1,
  },
  filterChip: {
    backgroundColor: theme.palette.structural.white,
  },
});

interface ChipPropsType {
  label: string;
  handleDelete: (event: any) => void;
  variant: "filterChip" | "defaultChip";
}

const Chip = ({ label, handleDelete, variant }: ChipPropsType) => {
  const classes = useStyles();
  const classNameRequired =
    variant === "filterChip"
      ? `${classes.chip} ${classes.filterChip}`
      : `${classes.chip}`;
  return (
    <MuiChip
      data-testid="chip"
      label={label}
      deleteIcon={<Icon name="close" />}
      onDelete={handleDelete}
      className={classNameRequired}
    />
  );
};

export default Chip;
