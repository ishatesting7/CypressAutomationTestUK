it('Capture Screenshot Update', ()=>{


    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.wait(2000);

    //cy.screenshot('demoscreen');

    
    cy.get("[name='username']").type('Admin')

    cy.get("[name='password']").type('admin123')

    cy.get("[type='submit']").click()
    
    cy.wait(2000);

    cy.get("img[alt='client brand banner']").should('not.be.visible');

 
})