import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Signup } from "./Signup";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing the Signup component", () => {
  describe("It renders the headings, input fields and buttons correctly", () => {
    it("Shows the heading 'Sign up for FarmHome'", () => {
      const { getByText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByText("Sign up for FarmHome")).toBeInTheDocument();
    });

    it("Shows the input label 'First Name:'", () => {
      const { getByText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByText("First Name:")).toBeInTheDocument();
    });

    it("Shows the input box for 'First Name:'", () => {
      const { getByLabelText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByLabelText("firstName")).toBeInTheDocument();
    });

    it("Shows the input label 'Last Name:'", () => {
      const { getByText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByText("Last Name:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Last Name:'", () => {
      const { getByLabelText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByLabelText("lastName")).toBeInTheDocument();
    });

    it("Shows the input label 'Username:'", () => {
      const { getByText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByText("Username:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Username:'", () => {
      const { getByLabelText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByLabelText("username")).toBeInTheDocument();
    });

    it("Shows the input label 'Password:'", () => {
      const { getByText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByText("Password:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Password:'", () => {
      const { getByLabelText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByLabelText("password")).toBeInTheDocument();
    });

    it("Shows the prompt text 'Already have an account? Log in'", () => {
      const { getByText } = render(
        <Router>
          <Signup />
        </Router>
      );
      expect(getByText("Already have an account? Log in")).toBeInTheDocument();
    });
  });
});
