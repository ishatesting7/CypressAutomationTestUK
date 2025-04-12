class users
{
   //Page Element
   //Page Action
   elements = {
    usernameInput:()=>{return cy.get(':nth-child(2) > .oxd-input')},
    userRoleDrpdown:()=>{return cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")},
    employeeNameInput:()=>{return cy.get("input[placeholder='Type for hints...']")},
    statusDrpdown:()=>{return cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")},
    searchBtn:()=>{return cy.get("button[type='submit']")},
    editUserdetails:()=>{return cy.get('.oxd-table-cell-actions > :nth-child(2)')}
}

   searchUserDetails(username)
   {

    this.elements.usernameInput().type(username)

    this.elements.userRoleDrpdown().click({force:true})
    cy.wait(1000);

    cy.contains('ESS').click();

    this.elements.employeeNameInput()
    .type('ABHILASH PECHERY THILAKAN')
    .wait(2000)
    .type('{downArrow}{enter}');
    
    
    this.elements.statusDrpdown().click({force:true})
    cy.wait(1000);

    cy.contains('Enabled').click();

    this.elements.searchBtn().click();
   }


   searchUserDetailsAndEdit(username)
   {

    // this.elements.usernameInput().type(username)

    // this.elements.userRoleDrpdown().click({force:true})
    // cy.wait(1000);

    // cy.contains('ESS').click();

    // this.elements.employeeNameInput()
    // .type('ABHILASH PECHERY THILAKAN')
    // .wait(2000)
    // .type('{downArrow}{enter}');
    
    
    // this.elements.statusDrpdown().click({force:true})
    // cy.wait(1000);

    // cy.contains('Enabled').click();

    // this.elements.searchBtn().click();
    this.elements.editUserdetails().click();
   }
}

module.exports = new users();

