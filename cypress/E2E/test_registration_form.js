///<reference types ="cypress"/>
///<reference types ='cypress-iframe'/>
//import 'cypress -iframe'
import HomePage from "../PageObjects/HomePage"
import Productpage from "../PageObjects/ProductPage"

describe('This is my Cypress-Project ', function()
{
    before(function(){
    cy.fixture('user_registration_test_data').then(function(data)
    {
    this.data=data
 })
})    


it('This is User registration test case', function(){
    const homePage = new HomePage()
    const productpage = new Productpage()
    cy.visit(Cypress.env('url')+"/angularpractice/")
   
    homePage.getEditBox().type(this.data.Name)
    homePage.getPassword().type(this.data.Password)
    homePage.getEmail().type(this.data.Email)
    homePage.getBirthDate().type(this.data.DateofBirth)
    homePage.getGender().select(this.data.Gender)
    homePage.GetTwoWayData().should('have.value',this.data.Name)
    homePage.getPassword().should('have.value',this.data.Password)
    homePage.getEmail().should('have.value',this.data.Email)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getCheckMe()
    homePage.getSubmitbtn()
    homePage.getCompletion().should('contain','Success')      

    })


})
  
