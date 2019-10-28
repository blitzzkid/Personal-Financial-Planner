import faker from "faker";

describe("A new user signs up, updates user profile and views retirement plan", () => {
  const baseUrl = Cypress.env("baseUrl");
  const username = faker.internet.userName();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName()

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
        .should("have.value", "pass1234");
      cy.get("button").click();
      cy.contains("Retirement");
    });
  });
});
