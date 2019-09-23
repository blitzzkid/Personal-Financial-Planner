import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RetirementPlannerForm } from "./RetirementPlannerForm";

describe("The retirement calculator page", () => {
  describe("It renders the form correctly", () => {
    it("Shows the question 'What is your current age'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(getByText("What is your current age?")).toBeInTheDocument();
    });
  });
});
