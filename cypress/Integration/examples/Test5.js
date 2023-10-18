
describe('This is my test suite',function(){
    it('This is my Test case', function(){



cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')     
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('fieldset [type="checkbox"]').check(['option2','option3'])

cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

cy.get('.inputs.ui-autocomplete-input').type('ind')

cy.get('.ui-menu-item').each(($el, index, $list) => {
   if($el.text() === 'Indonesia'){
cy.wrap($el).click()
   }
})
cy.get('.inputs.ui-autocomplete-input').should('have.value', 'Indonesia')


cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

cy.get('[value="radio1"]').check().should('be.checked').and('have.value','radio1')
 cy.get('[value="radio1"]').uncheck().should('not.be.unchecked')
cy.get('.radioButton').check(['radio2'],['radio3'])

cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
cy.on('window:alert',(Str) =>
{
    expect(Str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('windows:confirm',(Str) =>
{
    expect(Str).to.equal('Hello , Are you sure you want to confirm?')
})
cy.get('#opentab').invoke('removeAttr','target').click()

cy.origin('https://www.qaclickacademy.com/',() => {
    cy.get('#navbarSupportedContent a[href*="about"]').click()
    cy.get('.mt-50 h2').should('contain','QAClick Academy')
})

    })
})