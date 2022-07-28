import React from "react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
  const message = screen.getByTestId("message-icon");
  expect(message).toBeInTheDocument();
  const notify = screen.getByTestId("notifications-icon");
  expect(notify).toBeInTheDocument();
});
