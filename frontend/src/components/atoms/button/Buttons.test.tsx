import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("it renders Button", () => {
  render(
    <Button
      children="Hello"
      variant={"contained"}
      color={"primary"}
      size={"small"}
    />
  );
  const typoElement = screen.getByRole("button");
  expect(typoElement).toBeInTheDocument();
});
