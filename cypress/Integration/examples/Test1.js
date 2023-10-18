describe('My first test suite', function(){
    it('My first test case', function(){
       // cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/');
        cy.visit(Cypress.env('url')+"/seleniumPractise/")
    })
})