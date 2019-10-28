describe("A new user signs up, updates user profile and views retirement plan", () => {
  const baseUrl = Cypress.env("baseUrl");

  describe("Signs up a new user", () => {
    it("Should create a new user and login", () => {
      cy.visit(`${baseUrl}/signup`);
    });
  });
});
