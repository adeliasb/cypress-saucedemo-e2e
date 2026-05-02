// cypress/pages/InventoryPage.js

export class InventoryPage {
  elements = {
    firstProduct: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
  };

  adicionarProduto() {
    this.elements.firstProduct().click();
  }

  validarCarrinho() {
    this.elements.cartBadge().should("be.visible");
  }
}
