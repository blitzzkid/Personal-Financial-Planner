import faker from "faker";

describe("A new user signs up, updates user profile and views retirement plan", () => {
  const baseUrl = Cypress.env("baseUrl");
  const username = faker.internet.userName();
  const password = "pass1234";
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  describe("Signs up a new user", () => {
    it("Should create a new user and login", () => {
      cy.visit(`${baseUrl}`);
      cy.contains("Signup").click();
      cy.url().should("include", "/signup");
      cy.get("input[name=firstName]")
        .type(firstName)
        .should("have.value", firstName);
      cy.get("input[name=lastName]")
        .type(lastName)
        .should("have.value", lastName);
      cy.get("input[name=username]")
        .type(username)
        .should("have.value", username);
      cy.get("input[name=password]")
        .type("pass1234")
        .should("have.value", password);
      cy.get("button").click();
      cy.contains("Retirement");
    });

    describe("Log in with a user that was signed up", () => {
      beforeEach(() => {
        cy.visit(`${baseUrl}`);
        cy.get("input[name=username]")
          .type(username)
          .should("have.value", username);
        cy.get("input[name=password]")
          .type("pass1234")
          .should("have.value", password);
        cy.get("button")
          .contains("Log In")
          .click();
        cy.contains("Retirement");
      });

      it("Should update the user profile", () => {
        cy.contains("Profile").click();
        cy.url().should("include", "/profile");
        cy.get("input[name=birthYear]")
          .type("1989")
          .should("have.value", "1989");
        cy.get("input[name=retirementAge]")
          .type("60")
          .should("have.value", "60");
        cy.get("input[name=passingAge]")
          .type("80")
          .should("have.value", "80");
        cy.get("input[name=retirementIncome]")
          .type("1000")
          .should("have.value", "1000");
        cy.get("button")
          .contains("Update Profile")
          .click();
        cy.contains("Your update has been successful");
      });

      it("Should delete the user account", () => {
        cy.contains("Profile").click();
        cy.get("button")
          .contains("Delete Account")
          .click();
        cy.contains("Log in to FarmHome");
      });
    });
  });
});
