import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Carrinho", () => {
  it("deve adicionar produto", () => {
    cy.fixture("user").then((user) => {
      loginPage.acessar();
      loginPage.login(user.username, user.password);
      inventoryPage.adicionarProduto();
      inventoryPage.validarCarrinho();
    });
  });
});
