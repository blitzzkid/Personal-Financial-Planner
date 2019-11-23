import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "./Login";

describe("Testing the Login component", () => {
  describe("It renders the headings, input fields and buttons correctly", () => {
    it("Shows the heading 'Log in to FarmHome'", () => {
      const { getByText } = render(<Login />);
      expect(getByText("Log in to FarmHome")).toBeInTheDocument();
    });

    it("Shows the input label 'Username:'", () => {
      const { getByText } = render(<Login />);
      expect(getByText("Username:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Username:'", () => {
      const { getByLabelText } = render(<Login />);
      expect(getByLabelText("username")).toBeInTheDocument();
    });

    it("Shows the input label 'Password:'", () => {
      const { getByText } = render(<Login />);
      expect(getByText("Password:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Password:'", () => {
      const { getByLabelText } = render(<Login />);
      expect(getByLabelText("password")).toBeInTheDocument();
    });

    it("Shows the prompt text 'Don't have an account? Sign up'", () => {
      const { getByText } = render(<Login />);
      expect(getByText("Don't have an account? Sign up")).toBeInTheDocument();
    });
  });
});
