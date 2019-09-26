import "@testing-library/jest-dom/extend-expect";
import {
  lengthOfWorkingLife,
  calculateRetirementFund,
  calculateSavingsPerYearNotInvested,
  calculateSavingsPerMonthNotInvested,
  calculateSavingsPerYearInvested,
  calculateSavingsPerMonthInvested,
  generateSavingsNotInvestedData,
  generateSavingsInvestedData
} from "./SavingsCalculations";

describe("The calculations for the retirement planner", () => {
  it("Calculates the length of the working life correctly", () => {
    expect(lengthOfWorkingLife(30, 60)).toBe(30);
  });
  it("Calculates the retirement fund correctly", () => {
    expect(calculateRetirementFund(30, 60, 80, 1000, 0.02)).toBe(
      434726.78018480516
    );
  });
  it("Calculates the savings per year not invested correctly", () => {
    expect(calculateSavingsPerYearNotInvested(30, 434726.78018480516)).toBe(
      14490.892672826838
    );
  });
  it("Calculates the savings per month not invested correctly", () => {
    expect(calculateSavingsPerMonthNotInvested(14490.892672826838)).toBe(
      1207.5743894022364
    );
  });
  it("Calculates the savings per year invested correctly", () => {
    expect(calculateSavingsPerYearInvested(30, 434726.78018480516, 0.05)).toBe(
      6543.261909609254
    );
  });
  it("Calculates the savings per month invested correctly", () => {
    expect(calculateSavingsPerMonthInvested(6543.261909609254)).toBe(
      545.2718258007711
    );
  });
  it("Generates the data array for the savings not invested correctly", () => {
    expect(generateSavingsNotInvestedData(30, 31, 1000)).toEqual(
      expect.arrayContaining([{ x: 30, y: 1000 }, { x: 31, y: 2000 }])
    );
  });
  it("Generates the data array for the savings invested correctly", () => {
    expect(generateSavingsInvestedData(30, 31, 0.05, 1000)).toEqual(
      expect.arrayContaining([
        { x: 30, y: 1000.0000000000009 },
        { x: 31, y: 2050.000000000001 }
      ])
    );
  });
});
