import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Progressbar from "./progressbar";
import "@testing-library/jest-dom";
import Button from "@mui/material/Button";

test("it renders test", () => {
  render(<Progressbar />);
  const step1 = screen.getByText("Next");
  expect(step1).toBeInTheDocument();
});

test("it renders Button", () => {
  render(<Button variant="outlined" />);
  const Next = screen.getByRole("button");
  expect(Next).toBeInTheDocument();
});

test("when clicked on next, step1 should disappear", () => {
  render(<Progressbar />);
  const Next = screen.getByTestId("nextBtn");
  fireEvent.click(Next);
  const check = screen.queryByText(/Job Location/i);
  expect(check).toBeInTheDocument();
});

test("Testing Render", () => {
  render(<Progressbar />);
  const title = screen.getByText(/Your Location/i);
  expect(title).toBeInTheDocument();
});

test("Testing Render", () => {
  render(<Progressbar />);
  const title1 = screen.getByText(/Job Location/i);
  expect(title1).toBeInTheDocument();
});

describe("Progress Bar Test", () => {
  test("Testing Render", () => {
    render(<Progressbar />);
    const title2 = screen.getByText(/Your Skills/i);
    expect(title2).toBeInTheDocument();
  });

  test("Testing Button", () => {
    render(<Progressbar />);

    const nextBtn = screen.getByRole("button", {
      name: /Next/i,
    });

    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
  });
});

test("when clicked on back, step1 should appear", () => {
  render(<Progressbar />);
  const nextBtn = screen.getByTestId("nextBtn");
  fireEvent.click(nextBtn);
  const checkNext = screen.queryByText("Job Location");
  const backBtn = screen.getByTestId("backBtn");
  fireEvent.click(backBtn);
  const check = screen.queryByText("Your Location");
  expect(check).toBeInTheDocument();
});
