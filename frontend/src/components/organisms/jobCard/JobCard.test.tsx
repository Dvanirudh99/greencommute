import React from "react";
import JobCard from "./JobCard";
import { render, screen } from "@testing-library/react";

describe("JobCard", () => {
  test("renders JobCard with status active", () => {
    render(
      <JobCard
        role={"User Experience Designer"}
        company={"myntra"}
        address={"Hitech city, Hyderabad - 500072"}
        routes={["bike", "bus", "car"]}
        history={"36 min ago"}
        isActive={true}
      />
    );
    expect(screen.getByTestId("job-card")).toBeInTheDocument();
    expect(
      screen.getByTestId("job-card").classList.value.includes("makeStyles-card")
    ).toEqual(true);
    expect(
      screen
        .getByTestId("job-card")
        .classList.value.includes("makeStyles-active")
    ).toEqual(true);
  });
  test("renders JobCard with status idle", () => {
    render(
      <JobCard
        role={"User Experience Designer"}
        company={"myntra"}
        address={"Hitech city, Hyderabad - 500072"}
        routes={["bike", "bus", "car"]}
        history={"36 min ago"}
        isActive={false}
      />
    );
    expect(screen.getByTestId("job-card")).toBeInTheDocument();
    expect(
      screen.getByTestId("job-card").classList.value.includes("makeStyles-card")
    ).toEqual(true);
    expect(
      screen.getByTestId("job-card").classList.value.includes("makeStyles-idle")
    ).toEqual(true);
  });
});
