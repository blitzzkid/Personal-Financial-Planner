import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SavingsPlanner } from "./SavingsPlanner";

describe("The retirement calculator page", () => {
  it("Renders out the page correctly", () => {
    const { getByText } = render(<SavingsPlanner />);
    expect(getByText("Savings Planner")).toBeInTheDocument();
  });
});
