import * as React from "react";
import { Logos } from "../../../Constants";

export interface LogosType {
  name:
    | "bmw"
    | "hp"
    | "instagram"
    | "myntra"
    | "ola"
    | "rapido"
    | "twitter"
    | "uber"
    | "wipro"
    | "avatar"
    | "greenCommute";
  [key: string]: string;
}

const Logo = ({ name, ...props }: LogosType) => {
  return (
    <span data-testid={`${name}-logo`} {...props}>
      {Logos[name]}
    </span>
  );
};

export default Logo;
