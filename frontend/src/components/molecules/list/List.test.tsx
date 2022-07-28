import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import List from "./List";
import Logo from "../../atoms/logo/Logo";

test("renders the mentioned text", () => {
  render(<List name={"bmw"} title={"ola"} price={"Approximity"} />);
  const text = screen.getAllByText("ola");
  expect(text[0]).toBeInTheDocument();
});

test("renders the image", () => {
  render(<List name={"bmw"} title={"ola"} price={"Approximity"} />);
  const Book = screen.getByText("Book Now");
  expect(Book).toBeInTheDocument();
});
test("renders the logo", () => {
  render(<Logo name={"ola"} />);
  const ReactElement = screen.getByTestId("ola-logo");
  expect(ReactElement).toBeInTheDocument();
});
