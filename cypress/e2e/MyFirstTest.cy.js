// () => é o mesmo que function()
describe('Meu Primeiro Teste', () => {
    
    it('verificar titulo-positivo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        // entrar no site        
        cy.title().should('eq','OrangeHRM')
        // eq: equal: igual
        // verificar se o titulo esta correto
    })   
    
    it('verificar titulo-negativo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")        
        cy.title().should('eq','OrangeHRM123')
        // verificar se o titulo esta incorreto
    })

})