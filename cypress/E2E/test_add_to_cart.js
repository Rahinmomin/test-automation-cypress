///<reference types ="cypress"/>
///<reference types ='cypress-iframe'/>
//import 'cypress -iframe'
import HomePage from "../PageObjects/HomePage"
import Productpage from "../PageObjects/ProductPage"

describe('This is my Cypress-Project', function()
{
    before(function(){
    cy.fixture('user_registration_test_data').then(function(data)
    {
    this.data=data
 })
})    


it('This is add to cart test case', function(){
    const homePage = new HomePage()
    const productpage = new Productpage()
    cy.visit(Cypress.env('url')+"/angularpractice/")
   
    productpage.getShopTab()
    productpage.selectMobileProduct(this.data.productName)
    productpage.validateProductTotal()
    productpage.clickCheckOutBtn()
    productpage.typecountry()
    productpage.confirmCountry()
    Cypress.config('defaultCommandTimeout',4000)
    productpage.tickCheckBox()
    productpage.clickPurchaseBtn()
    productpage.completionAlert()

    })
  })
