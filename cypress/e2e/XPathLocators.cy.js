describe('XPathLocators', () => {

    it('achar numero de produtos', () => {

        cy.visit("http://automationpractice.com/index.php")

        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7) // XPath locator

    })

    it('xpath aninhado', () => {

        cy.visit("http://automationpractice.com/index.php")
        
        cy.xpath("//ul[@id='homefeatured']").xpath("./li").should('have.length',7) 
        // 1 XPath dentro de outro XPath

    })

})