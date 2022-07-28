import * as React from "react";
import { Icons } from "../../../Constants";
import { SvgIcon } from "@mui/material";

export interface IconPropsType {
  name:
    | "save"
    | "dashboard"
    | "work"
    | "test"
    | "settings"
    | "news"
    | "help"
    | "contact"
    | "done"
    | "notifications"
    | "search"
    | "message"
    | "bus"
    | "car"
    | "train"
    | "bike"
    | "more"
    | "filter"
    | "back"
    | "arrow"
    | "mapPin"
    | "location"
    | "tick"
    | "current"
    | "swap"
    | "rupee"
    | "close"
    | "upload";
  [key: string]: any;
}

const Icon = ({ name, ...props }: IconPropsType) => {
  return (
    <SvgIcon {...props} data-testid={`${name}-icon`}>
      {Icons[name]}
    </SvgIcon>
  );
};

export default Icon;
