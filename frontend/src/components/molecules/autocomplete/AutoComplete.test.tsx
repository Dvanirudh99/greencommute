import React from "react";
import AutoComplete from "./AutoComplete";
import { fireEvent, render, screen } from "@testing-library/react";

const LOCATION_LIST = ["Hyderabad", "Mumbai"];

describe("AutoComplete", () => {
  test("renders AutoComplete", () => {
    render(
      <AutoComplete
        options={LOCATION_LIST}
        value="location"
        handleChange={(event, value) => console.log(value)}
        placeholder="Search skills"
      />
    );

    expect(screen.getByTestId("AutoComplete")).toBeInTheDocument();
  });
});
