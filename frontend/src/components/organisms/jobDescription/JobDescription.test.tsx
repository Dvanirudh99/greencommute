import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import JobDescription from "./JobDescription";
import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import { BrowserRouter as Router } from "react-router-dom";

const myMock = jest.fn();
test("it should render passed icon", () => {
  render(
    <Router>
      <JobDescription
        jobId={1}
        handleClick={myMock}
        jobdescription={"bmw"}
        companyName={"bmw"}
        companyLogo={"bmw"}
        location={"hyd"}
        timePosted={"2 weeks"}
      />
    </Router>
  );
  const arrow = screen.getByTestId("arrow-icon");
  expect(arrow).toBeInTheDocument();
});
test("it renders Button", () => {
  render(
    <Button
      children="Apply"
      variant={"contained"}
      color={"primary"}
      size={"small"}
    />
  );
  const typoElement = screen.getByRole("button");
  expect(typoElement).toBeInTheDocument();
});

test("renders Logo", () => {
  render(<Logo name="bmw" />);
  expect(screen.getByTestId(`bmw-logo`)).toBeInTheDocument();
});

test("it renders text", () => {
  render(
    <Router>
      <JobDescription
        jobId={1}
        handleClick={myMock}
        jobdescription={"hp"}
        companyName={"hp"}
        companyLogo={"hp"}
        location={"mumbai"}
        timePosted={"2 days"}
      />
    </Router>
  );
  const description = screen.getByTestId("card");
  expect(description).toBeInTheDocument();
});

test("when clicked on button, action should appear", () => {
  render(
    <Router>
      <JobDescription
        jobId={1}
        handleClick={myMock}
        jobdescription={"myntra"}
        companyName={"myntra"}
        companyLogo={"myntra"}
        location={"delhi"}
        timePosted={"3 weeks"}
      />
    </Router>
  );
  expect(screen.getByTestId("common-card-header")).toBeInTheDocument();
  // const saveButton = screen.getByTestId("button-save");
  // fireEvent.click(saveButton);
  // expect(saveButton).toBeInTheDocument();
});
