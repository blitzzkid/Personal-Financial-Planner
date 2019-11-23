import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing the Login component", () => {
  describe("It renders the headings, input fields and buttons correctly", () => {
    it("Shows the heading 'Log in to FarmHome'", () => {
      const { getByText } = render(
        <Router>
          <Login />
        </Router>
      );
      expect(getByText("Log in to FarmHome")).toBeInTheDocument();
    });

    it("Shows the input label 'Username:'", () => {
      const { getByText } = render(
        <Router>
          <Login />
        </Router>
      );
      expect(getByText("Username:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Username:'", () => {
      const { getByLabelText } = render(
        <Router>
          <Login />
        </Router>
      );
      expect(getByLabelText("username")).toBeInTheDocument();
    });

    it("Shows the input label 'Password:'", () => {
      const { getByText } = render(
        <Router>
          <Login />
        </Router>
      );
      expect(getByText("Password:")).toBeInTheDocument();
    });

    it("Shows the input box for 'Password:'", () => {
      const { getByLabelText } = render(
        <Router>
          <Login />
        </Router>
      );
      expect(getByLabelText("password")).toBeInTheDocument();
    });

    it("Shows the prompt text 'Don't have an account? Sign up'", () => {
      const { getByText } = render(
        <Router>
          <Login />
        </Router>
      );
      expect(getByText("Don't have an account? Sign up")).toBeInTheDocument();
    });
  });
  describe("Fills up the login form", () => {
    it("Fill up with correct credentials'", () => {
      const handleUsernameChange = jest.fn();
      const { getByLabelText } = render(
        <Router>
          <Login handleUsernameChange={handleUsernameChange} />
        </Router>
      );

      const username = getByLabelText("username");
      fireEvent.change(username, {
        target: { value: "user123" }
      });

      const userPassword = getByLabelText("password");
      fireEvent.change(userPassword, { target: { value: "pass1234" } });

      expect(username.value).toBe("user123");
      expect(userPassword.value).toBe("pass1234");
    });
  });
});
