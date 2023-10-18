class HomePage{
 
getEditBox()
{
  return cy.get('input[name="name"]:nth-child(2)')
}   
GetTwoWayData ()
{
   return cy.get('.ng-untouched.ng-pristine.ng-valid')
}
getGender()
{
    return cy.get('select')
}    
getEntrepreneur()
{
   return cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get('[href="/angularpractice/shop"]')
}


}
export default HomePage;