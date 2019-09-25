import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FundsTable } from "./FundsTable";

describe("Renders out the table correctly", () => {
  describe("Renders out the table header correctly", () => {
    it("Shows the symbol heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Symbol")).toBeInTheDocument();
    });
    it("Shows the Name heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Name")).toBeInTheDocument();
    });
    it("Shows the Price heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Price")).toBeInTheDocument();
    });
    it("Shows the return YTD heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Return YTD")).toBeInTheDocument();
    });
    it("Shows the return 1 month heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Return 1 month")).toBeInTheDocument();
    });
    it("Shows the return 1 quarter heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Return 1 quarter")).toBeInTheDocument();
    });
    it("Shows the return 1 year heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Return 1 year")).toBeInTheDocument();
    });
    it("Shows the return 3 years heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Return 3 years")).toBeInTheDocument();
    });
    it("Shows the return 5 years heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Return 5 years")).toBeInTheDocument();
    });
    it("Shows the expense ratio heading", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("Expense ratio")).toBeInTheDocument();
    });
  });
  describe("Renders out the funds data correctly", () => {
    it("Shows the fund's symbol", () => {
      const { getByText } = render(<FundsTable />);
      expect(getByText("AAAAX")).toBeInTheDocument();
    });
    it("Shows the fund's Name", () => {
      const { getByText } = render(<FundsTable />);
      expect(
        getByText("DWS RREEF Real Assets Fund - Class A")
      ).toBeInTheDocument();
    });
  });
});
