import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { theme } from "../../../themes/Theme";
interface CheckboxProps {
  label: string;
  defaultChecked: boolean;
  changeChecked: (event: any) => void;
}

const CheckboxItem = (props: CheckboxProps) => {
  return (
    <div data-testid={`${props.label}-checkbox`}>
      <FormGroup>
        <FormControlLabel
          disabled={false}
          control={
            <Checkbox
              checked={props.defaultChecked}
              onClick={props.changeChecked}
              sx={{
                color: theme.palette.grey[400],
                "&.Mui-checked": {
                  color: theme.palette.primary[400],
                },
              }}
            />
          }
          label={props.label}
        />
      </FormGroup>
    </div>
  );
};
export default CheckboxItem;
