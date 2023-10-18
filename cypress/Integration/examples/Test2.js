

describe('This is my Second Test', function(){
    it('this is my test2', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('h4.product-name').should('have.length',4)
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
        const veg = $el.find('.product-name').text()
        if(veg.includes('Cashews')){
        cy.wrap($el).find('button').click()
        cy.get('[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    }})})
    })