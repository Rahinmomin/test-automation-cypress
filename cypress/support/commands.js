// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("ProductName", (Productdetail) => {

  cy.get('h4.card-title').each(($el, index, $list) =>
  {
  if($el.text().includes(Productdetail)) {
    cy.get('.btn.btn-info').eq(index).click()
  }

})
})

Cypress.Commands.add("get_text", (locator) => {
  cy.get(locator).then(function(element) {
    element.text()
  })
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })