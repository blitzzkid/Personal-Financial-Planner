import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RetirementNumbers } from "./RetirementNumbers";

describe("The retirement calculator page", () => {
  describe("It renders the headings, questions and statements correctly", () => {
    it("Shows the heading 'Knowing more about you'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(getByText("Knowing more about you")).toBeInTheDocument();
    });
    it("Shows the question 'How old are you now?'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(getByText("How old are you now?")).toBeInTheDocument();
    });
    it("Shows the input box for 'How old are you now?'", () => {
      const { getByLabelText } = render(<RetirementNumbers />);
      expect(getByLabelText("current-age")).toBeInTheDocument();
    });
    it("Shows the question 'At what age do you plan to retire?'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText("At what age do you plan to retire?")
      ).toBeInTheDocument();
    });
    it("Shows the question 'How old do you expect to live until?'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText("How old do you expect to live until?")
      ).toBeInTheDocument();
    });
    it("Shows the question 'How much money would you like to have per month during retirement?'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText(
          "How much money would you like to have per month during retirement?"
        )
      ).toBeInTheDocument();
    });
    it("Shows the question 'What is your targeted annual returns on investment?'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText("What is your targeted annual returns on investment?")
      ).toBeInTheDocument();
    });
    it("Shows the Plan for retirement button'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(getByText("Plan for retirement")).toBeInTheDocument();
    });
    it("Shows the heading 'Your retirement needs'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(getByText("Your retirement needs")).toBeInTheDocument();
    });
    it("Shows the statement 'Retirement fund required (accounting for 2% inflation)'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText("Retirement fund required (accounting for 2% inflation)")
      ).toBeInTheDocument();
    });
    it("Shows the statement 'Savings per month required if you don't invest'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText("Savings per month required if you don't invest")
      ).toBeInTheDocument();
    });
    it("Shows the statement 'Savings per month required if you meet your target investment returns'", () => {
      const { getByText } = render(<RetirementNumbers />);
      expect(
        getByText(
          "Savings per month required if you meet your target investment returns"
        )
      ).toBeInTheDocument();
    });
  });
  describe("It takes in the input keyed in by the user correctly", () => {
    const inputCurrentAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementNumbers inputCurrentAge={inputCurrentAge} />
      );
      fireEvent.change(getByLabelText("current-age"), {
        target: { value: "30" }
      });
      expect(getByLabelText("current-age").value).toBe("30");
    });
    const inputRetirementAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementNumbers inputRetirementAge={inputRetirementAge} />
      );
      fireEvent.change(getByLabelText("retirement-age"), {
        target: { value: "60" }
      });
      expect(getByLabelText("retirement-age").value).toBe("60");
    });
    const inputPassingAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementNumbers inputPassingAge={inputPassingAge} />
      );
      fireEvent.change(getByLabelText("passing-age"), {
        target: { value: "80" }
      });
      expect(getByLabelText("passing-age").value).toBe("80");
    });
    const inputRetirementIncome = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementNumbers inputRetirementIncome={inputRetirementIncome} />
      );
      fireEvent.change(getByLabelText("retirement-income"), {
        target: { value: "1000" }
      });
      expect(getByLabelText("retirement-income").value).toBe("1000");
    });
    const inputInterestRate = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <RetirementNumbers inputInterestRate={inputInterestRate} />
      );
      fireEvent.change(getByLabelText("target-returns"), {
        target: { value: "5" }
      });
      expect(getByLabelText("target-returns").value).toBe("5");
    });
    describe("It takes in the input keyed in by the user correctly", () => {
      it("Uses all positive whole numbers", () => {
        const { getByText, getByLabelText, rerender } = render(
          <RetirementNumbers
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
        fireEvent.click(getByText("Plan for retirement"));
        rerender(
          <RetirementNumbers
            retirementFund={"434,727"}
            savingsPerMonthNotInvested={"1,208"}
            savingsPerMonthInvested={"545"}
          />
        );
        expect(getByText("$434,727")).toBeInTheDocument();
        expect(getByText("$1,208")).toBeInTheDocument();
        expect(getByText("$545")).toBeInTheDocument();
      });
    });
  });
});
