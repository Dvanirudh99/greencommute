import React from "react";
import RecommendedCard from "./RecommendedCard";
import { render, screen } from "@testing-library/react";

describe("RecommendedCard", () => {
  test("renders RecommendedCard", () => {
    render(
      <RecommendedCard
        role={"User Experience Designer"}
        company={"hp"}
        address={"Hyderabad, Telangana, India"}
        routes={["bike", "bus", "car", "train"]}
        history={"1hr 36 mins ago"}
      />
    );
    expect(screen.getByTestId("recommended-card")).toBeInTheDocument();
  });
});
