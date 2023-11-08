require('cypress-xpath');
import { Login } from "../pages/Login";

const product = new Login();

describe('Product Detail', () => {
    beforeEach(() => {
      product.login();
    })
  
    it('Show Product Detail', () => {
      cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").click();
      cy.wait(3000);
      cy.xpath("//div[@class='inventory_details_name large_size']").should('have.text', "Sauce Labs Backpack");
      cy.screenshot();
      cy.wait(5000);
    })
  
});