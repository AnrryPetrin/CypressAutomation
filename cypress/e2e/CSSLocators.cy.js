describe('CSSLocators', () => {

    it("csslocators", () => {
    
        cy.visit("http://automationpractice.com/index.php")
    
        cy.get("#search_query_top").type("T-Shirts") // id locator
        
        cy.get("[name='submit_search']").click() // attribute locator
    
        cy.get(".lighter").contains("T-Shirts").should('be.visible') // class locator
    
        cy.get("a.button.ajax_add_to_cart_button.btn.btn-default").click() // tag class locator
    
    })
    
    
})