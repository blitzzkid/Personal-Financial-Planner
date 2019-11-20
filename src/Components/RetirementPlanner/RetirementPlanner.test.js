import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RetirementPlanner } from "./RetirementPlanner";

describe("The retirement calculator page", () => {
  describe("It renders the headings, questions and statements correctly", () => {
    it("Shows the heading 'Welcome!'", () => {
      const { getByText } = render(<RetirementPlanner />);
      expect(getByText("Welcome!")).toBeInTheDocument();
    });
  });
});
