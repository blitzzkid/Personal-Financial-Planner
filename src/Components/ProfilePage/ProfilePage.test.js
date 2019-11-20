import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfilePage } from "./ProfilePage";

describe("The retirement calculator page", () => {
  describe("It renders the headings, questions and statements correctly", () => {
    it("Shows the heading 'Knowing more about you'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(getByText("Knowing more about you")).toBeInTheDocument();
    });

    it("Shows the question 'What year were you born in?'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(getByText("What year were you born in?")).toBeInTheDocument();
    });

    it("Shows the input box for 'What year were you born in?'", () => {
      const { getByLabelText } = render(<ProfilePage />);
      expect(getByLabelText("current-age")).toBeInTheDocument();
    });

    it("Shows the question 'At what age do you plan to retire? (in years)'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(
        getByText("At what age do you plan to retire? (in years)")
      ).toBeInTheDocument();
    });

    it("Shows the question 'How old do you expect to live until? (in years)'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(
        getByText("How old do you expect to live until? (in years)")
      ).toBeInTheDocument();
    });

    it("Shows the question 'How much money would you like to have per month during retirement? ($ in today's value)'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(
        getByText(
          "How much money would you like to have per month during retirement? ($ in today's value)"
        )
      ).toBeInTheDocument();
    });

    it("Shows the question 'What is your targeted annual returns on investment? (in %)'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(
        getByText("What is your targeted annual returns on investment? (in %)")
      ).toBeInTheDocument();
    });

    it("Shows the Plan for Update Profile button'", () => {
      const { getByText } = render(<ProfilePage />);
      expect(getByText("Update Profile")).toBeInTheDocument();
    });
  });

  describe("It takes in the input keyed in by the user correctly", () => {
    const inputCurrentAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <ProfilePage inputCurrentAge={inputCurrentAge} />
      );
      fireEvent.change(getByLabelText("current-age"), {
        target: { value: "30" }
      });
      expect(getByLabelText("current-age").value).toBe("30");
    });
    const inputRetirementAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <ProfilePage inputRetirementAge={inputRetirementAge} />
      );
      fireEvent.change(getByLabelText("retirement-age"), {
        target: { value: "60" }
      });
      expect(getByLabelText("retirement-age").value).toBe("60");
    });
    const inputPassingAge = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <ProfilePage inputPassingAge={inputPassingAge} />
      );
      fireEvent.change(getByLabelText("passing-age"), {
        target: { value: "80" }
      });
      expect(getByLabelText("passing-age").value).toBe("80");
    });
    const inputRetirementIncome = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <ProfilePage inputRetirementIncome={inputRetirementIncome} />
      );
      fireEvent.change(getByLabelText("retirement-income"), {
        target: { value: "1000" }
      });
      expect(getByLabelText("retirement-income").value).toBe("1000");
    });
    const inputInterestRate = jest.fn();
    it("It should set the input keyed in by the user", () => {
      const { getByLabelText } = render(
        <ProfilePage inputInterestRate={inputInterestRate} />
      );
      fireEvent.change(getByLabelText("target-returns"), {
        target: { value: "5" }
      });
      expect(getByLabelText("target-returns").value).toBe("5");
    });
    describe("It takes in the input keyed in by the user correctly", () => {
      it("Uses all positive whole numbers", () => {
        const { getByText, getByLabelText } = render(
          <ProfilePage
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
        fireEvent.click(getByText("Update Profile"));
      });
    });
  });
});
