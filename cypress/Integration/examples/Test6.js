describe('This is my Test Suite', function(){

    it('This is my Test code', function(){


//cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.visit(Cypress.env('url')+"/AutomationPractice/")
// cy.get('#opentab').click()
// cy.on('#opentab').invoke('removeAttr','target').click()

// cy.get('tr td:nth-child(2)').each(($el,index,$list) => {
//  const site=$el.text()
// if(site.includes('Python')) {
//     cy.get('tr td:nth-child(2)').eq(index).next().then((price) =>  {
//         const productPrice = price.text()
//         expect(productPrice).to.equal('25')
//     })
    
// }

cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
   const site = $el.text()
   if(site.includes('Appium') ){
      cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
        const ProductPrice = price.text()
        expect(ProductPrice).to.equal('30')
      })
   }
})

})



    })



   