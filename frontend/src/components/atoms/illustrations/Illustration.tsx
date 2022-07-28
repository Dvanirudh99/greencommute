import * as React from "react";
import { Illustrations } from "../../../Constants";

export interface IllustrationProps {
  name: "jobs" | "mapview" | "work" | "stay";
}

const Illustration = ({ name }: IllustrationProps) => {
  return <span data-testid="illustration">{Illustrations[name]}</span>;
};

export default Illustration;
