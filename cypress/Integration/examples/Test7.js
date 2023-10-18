describe('This is my Test suite', function(){
  it('This is my Test case', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('div .mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('includes','top')

  })
})