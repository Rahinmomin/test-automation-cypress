///<reference types ="cypress"/>
///<reference types ='cypress-iframe'/>
//import 'cypress -iframe'
import HomePage from "../PageObjects/HomePage"
import Productpage from "../PageObjects/ProductPage"

describe('This is my Test suite', function()
{
    before(function(){
    cy.fixture('example').then(function(data)
    {
    this.data=data
 })
})    


it('This is my Test case', function(){
    const homePage = new HomePage()
    const productpage = new Productpage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
   
    //cy.get('input[name="name"]:nth-child(2)').type("Bob")
    //cy.get('select').select("Female")
    //cy.get('.ng-untouched.ng-pristine.ng-valid').should('have.value','Bob')
    //cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    //cy.get('#inlineRadio3').should('be.disabled')
    //cy.get('[href="/angularpractice/shop"]').click()

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select("Female")
    homePage.GetTwoWayData().should('have.value','Bob')
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()

    this.data.Productdetail.forEach(function(element) {
        cy.ProductName(element)
    });
      productpage.checkOutButton().click()

      var sum=0
      cy.get('tr td:nth-child(4) strong').each(($el,index, $list) => {
        const Amount=$el.text()
          var res = Amount.split(" ")
          res = res[1].trim()
          sum= Number(sum)+Number(res)
      }).then(function(){

      cy.log(sum)
    }) 

    cy.get('h3 strong').then(function(element){
      const Amount = element.text()
      var res = Amount.split(" ")
      var Total = res[1].trim()
      expect(Number(Total)).to.equal(sum) 
    })
      

      cy.get('.btn.btn-success').click()
      cy.get('#country').type('India')
     // cy.get('div.container app-checkout.row div:nth-child(3) div.suggestions:nth-child(2) ul:nth-child(1) li:nth-child(1) > a:nth-child(1)').click()
      cy.get('.input-field.col.s12').next().contains('India').click()
      //Cypress.config('defaultCommandTimeout',8000)
      cy.get('#checkbox2').click({force: true})
      cy.get('input.btn.btn-success.btn-lg').click()
      //cy.get('.alert').should('have.text',' Thank you! Your order will be delivered in next few weeks :-')
     cy.get('.alert').then(function(element){
        const FinalText=element.text()
     expect(FinalText.includes("Success")).to.be.true   
     })
      

    })


})
  
