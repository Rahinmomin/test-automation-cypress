

describe('This is my est suite2', function(){
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
        
        



        // it("This is my LastTest", function() {
        //      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //     // cy.get('.search-keyword').type('ca')
        //     // cy.wait(2000)
        //     // cy.get('h4.product-name').should('have.length',4)

        //     // cy.get('.products').find('.product').each(($el, index, $list) => {
        //     // const veg = $el.find('p.product-price').text()
        //     // if(veg.includes('56')){
        //     // cy.wrap($el).find('button').click() }
        //     // })
        //     cy.get('div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(2) > h4.product-name').then(function(name){
        //         cy.log(name.text())
        //     })
        //     cy.get('div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(8) > h4.product-name').then(function(name){
        //         cy.log(name.text())
        //      })
        //    }
        // )

        cy.get('[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        // cy.get('.products-wrapper').find('.products').each(($el, index, $list) => {
        //    const textpress=$el.find('button').text()

        //    if(textpress.includes('Place Order')){
        //     cy.wrap($el).find('button').click()
        //    }
        // })

    }})})
    })