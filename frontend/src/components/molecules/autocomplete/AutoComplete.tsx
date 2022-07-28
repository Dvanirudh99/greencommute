import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface AutoCompleteProps {
  options: string[];
  handleChange: (event: any, value: any) => void;
  value: string;
  placeholder: string;
}
const useStyles = makeStyles({
  autocomplete: {
    width: "352px",
  },
});
const AutoComplete = ({
  options,
  value,
  handleChange,
  placeholder,
}: AutoCompleteProps) => {
  const classes = useStyles();
  return (
    <Autocomplete
      data-testid="AutoComplete"
      autoHighlight
      autoSelect
      filterSelectedOptions
      freeSolo
      clearOnBlur
      onChange={handleChange}
      id="combo-box-demo2"
      options={options}
      className={classes.autocomplete}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          sx={{
            ".MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
          }}
        />
      )}
      value={value}
    />
  );
};
export default AutoComplete;
