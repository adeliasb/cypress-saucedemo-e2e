export class LoginPage {
  // classe da tela login

  elements = {
    // mapa de elementos
    username: () => cy.get("#user-name"), // campo usuário
    password: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
  };

  acessar() {
    cy.visit("/");
  }

  login(user, pass) {
    this.elements.username().type(user);
    this.elements.password().type(pass);
    this.elements.loginButton().click();
  }
}
