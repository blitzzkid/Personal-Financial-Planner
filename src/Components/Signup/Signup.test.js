import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

    describe("Fills up the login form", () => {
      it("Fill up with correct credentials'", () => {
        const handleUsernameChange = jest.fn();
        const { getByLabelText } = render(
          <Router>
            <Signup handleUsernameChange={handleUsernameChange} />
          </Router>
        );

        const firstName = getByLabelText("firstName");
        fireEvent.change(firstName, {
          target: { value: "Tom" }
        });

        const lastName = getByLabelText("lastName");
        fireEvent.change(lastName, {
          target: { value: "Tan" }
        });

        const username = getByLabelText("username");
        fireEvent.change(username, {
          target: { value: "user123" }
        });

        const userPassword = getByLabelText("password");
        fireEvent.change(userPassword, { target: { value: "pass1234" } });

        expect(firstName.value).toBe("Tom");
        expect(lastName.value).toBe("Tan");
        expect(username.value).toBe("user123");
        expect(userPassword.value).toBe("pass1234");
      });
    });
  });
});
