describe('This is my practice suite', function(){
    it('This is my Practise site', function(){
        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.get('[name="userName"]').type('admin')
        cy.get('[name="password"]').type('admin')
        cy.get('[name="submit"]').click()
        cy.contains('Login Successfully').should('have.text', 'Login Successfully')
        cy.contains(" Thank you for Loggin. ").should('have.text', ' Thank you for Loggin. ')

    })
})