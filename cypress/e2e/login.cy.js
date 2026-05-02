// cypress/e2e/login.cy.js

import { LoginPage } from "../pages/LoginPage";

const loginPage = new LoginPage();

describe("Login", () => {
  it("Login válido", () => {
    cy.fixture("user").then((user) => {
      loginPage.acessar();
      loginPage.login(user.username, user.password);
      cy.url().should("include", "inventory");
    });
  });
});
