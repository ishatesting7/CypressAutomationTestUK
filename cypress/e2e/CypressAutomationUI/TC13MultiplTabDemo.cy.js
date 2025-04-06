it('Handle Multiple Tabs', ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.wait(2000);

    cy.get("[name='username']").type("Admin");

    cy.get("[name='password']").type("admin123");

    cy.get('[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').invoke('removeAttr','target').click();


    cy.origin('https://www.linkedin.com/company/orangehrm/mycompany/', () => {
        
        cy.wait(4000)

        cy.log(cy.url());
    
        cy.go('back');
    
      })
    
    //cy.url().should('include','opensource-demo')
})


it.only('Handle Multiple Tabs', ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.wait(2000);

    cy.get("[name='username']").type("Admin");

    cy.get("[name='password']").type("admin123");

    cy.get('[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').then((prope)=>{

            let url = prope.prop('href')

            //cy.visit(url);
            cy.origin(url, ()=>{

                cy.visit(url);
                
                cy.wait(2000);

                //cy.url().should('include','linkedin');
            })

    })


    // cy.origin('https://www.linkedin.com/company/orangehrm/mycompany/', () => {
        
    //     cy.wait(4000)

    //     cy.log(cy.url());
    
    //     cy.go('back');
    
    //   })
    
    //cy.url().should('include','opensource-demo')
})