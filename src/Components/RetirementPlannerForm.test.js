import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RetirementPlannerForm } from "./RetirementPlannerForm";

describe("The retirement calculator page", () => {
  describe("It renders the headings, questions and statements correctly", () => {
    it("Shows the heading 'Your working and retirement years'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("Your working and retirement years")
      ).toBeInTheDocument();
    });
    it("Shows the question 'What is your current age'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(getByText("What is your current age?")).toBeInTheDocument();
    });
    it("Shows the input box for 'What is your current age'", () => {
      const { getByLabelText } = render(<RetirementPlannerForm />);
      expect(getByLabelText("current-age")).toBeInTheDocument();
    });
    it("Shows the question 'At what age do you plan to retire?'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("At what age do you plan to retire?")
      ).toBeInTheDocument();
    });
    it("Shows the heading 'Your retirement lifestyle'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(getByText("Your retirement lifestyle")).toBeInTheDocument();
    });
    it("Shows the question 'How old do you expect to live until?'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("How old do you expect to live until?")
      ).toBeInTheDocument();
    });
    it("Shows the question 'Desired monthly income (in today's value)'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("Desired monthly income (in today's value)")
      ).toBeInTheDocument();
    });
    it("Shows the heading 'Your risk appetite'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(getByText("Your risk appetite")).toBeInTheDocument();
    });
    it("Shows the question 'What is your targeted annual returns on investment? (in %)'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("What is your targeted annual returns on investment? (in %)")
      ).toBeInTheDocument();
    });
    it("Shows the Calculate button'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(getByText("Calculate")).toBeInTheDocument();
    });
    it("Shows the heading 'Your Retirement Needs'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(getByText("Your Retirement Needs")).toBeInTheDocument();
    });
    it("Shows the statement 'Retirement Fund (accounting for inflation of 2%)'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("Retirement Fund (accounting for inflation of 2%)")
      ).toBeInTheDocument();
    });
    it("Shows the statement 'Monthly contribution required (not invested)'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("Monthly contribution required (not invested)")
      ).toBeInTheDocument();
    });
    it("Shows the statement 'Monthly contribution required (At your target ROI)'", () => {
      const { getByText } = render(<RetirementPlannerForm />);
      expect(
        getByText("Monthly contribution required (At your target ROI)")
      ).toBeInTheDocument();
    });
  });
  describe("It takes in the input keyed in by the user correctly", () => {
    const inputCurrentAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementPlannerForm inputCurrentAge={inputCurrentAge} />
      );
      fireEvent.change(getByLabelText("current-age"), {
        target: { value: "30" }
      });
      expect(getByLabelText("current-age").value).toBe("30");
    });
    const inputRetirementAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementPlannerForm inputRetirementAge={inputRetirementAge} />
      );
      fireEvent.change(getByLabelText("retirement-age"), {
        target: { value: "60" }
      });
      expect(getByLabelText("retirement-age").value).toBe("60");
    });
    const inputPassingAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementPlannerForm inputPassingAge={inputPassingAge} />
      );
      fireEvent.change(getByLabelText("passing-age"), {
        target: { value: "80" }
      });
      expect(getByLabelText("passing-age").value).toBe("80");
    });
    const inputRetirementIncome = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementPlannerForm inputRetirementIncome={inputRetirementIncome} />
      );
      fireEvent.change(getByLabelText("retirement-income"), {
        target: { value: "1000" }
      });
      expect(getByLabelText("retirement-income").value).toBe("1000");
    });
    const inputInterestRate = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementPlannerForm inputInterestRate={inputInterestRate} />
      );
      fireEvent.change(getByLabelText("target-returns"), {
        target: { value: "5" }
      });
      expect(getByLabelText("target-returns").value).toBe("5");
    });
    describe("It takes in the input keyed in by the user correctly", () => {
      it("Uses all positive whole numbers", () => {
        const { getByText, getByLabelText, rerender } = render(
          <RetirementPlannerForm
            inputCurrentAge={inputCurrentAge}
            inputRetirementAge={inputRetirementAge}
            inputPassingAge={inputPassingAge}
            inputRetirementIncome={inputRetirementIncome}
            inputInterestRate={inputInterestRate}
          />
        );
        fireEvent.change(getByLabelText("current-age"), {
          target: { value: "30" }
        });
        fireEvent.change(getByLabelText("retirement-age"), {
          target: { value: "60" }
        });
        fireEvent.change(getByLabelText("passing-age"), {
          target: { value: "80" }
        });
        fireEvent.change(getByLabelText("retirement-income"), {
          target: { value: "1000" }
        });
        fireEvent.change(getByLabelText("target-returns"), {
          target: { value: "5" }
        });
        fireEvent.click(getByText("Calculate"));
        rerender(
          <RetirementPlannerForm
            retirementFund={"434,727"}
            savingsPerMonthNotInvested={"1,208"}
            monthlyContributionInvested={"545"}
          />
        );
        expect(getByText("$434,727")).toBeInTheDocument();
        expect(getByText("$1,208")).toBeInTheDocument();
        expect(getByText("$545")).toBeInTheDocument();
      });
    });
  });
});
