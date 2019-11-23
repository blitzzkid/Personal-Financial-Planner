import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoginHeader, Header } from "./Header";

describe("Testing the Header and Logged in Header component", () => {
  describe("It renders the header before login correctly", () => {
    it("Shows the heading 'Log in to FarmHome'", () => {
      const { getByText } = render(<LoginHeader />);
      expect(getByText("FarmHome")).toBeInTheDocument();
    });

    it("Shows the link for 'Signup'", () => {
      const { getByText } = render(<LoginHeader />);
      expect(getByText("Signup")).toBeInTheDocument();
    });
  });

  describe("It renders the header after login correctly", () => {
    it("Shows the heading 'Log in to FarmHome'", () => {
      const { getByText } = render(<Header />);
      expect(getByText("FarmHome")).toBeInTheDocument();
    });

    it("Shows the link for 'Retirement'", () => {
      const { getByText } = render(<Header />);
      expect(getByText("Retirement")).toBeInTheDocument();
    });

    it("Shows the link for 'Profile'", () => {
      const { getByText } = render(<Header />);
      expect(getByText("Profile")).toBeInTheDocument();
    });
  });
});
