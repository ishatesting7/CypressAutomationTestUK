describe('Locator Demo', ()=>{

    it('Locator Demo - Valid', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

        cy.get("[name='username']").type('Admin')

        cy.get("[name='password']").type('admin123')

        cy.get("[type='submit']").click()

        cy.wait(3000)

        cy.get("img[alt='client brand banner']").should('be.visible');


        cy.get('[class="oxd-main-menu-item"]').should('have.length.above', 12);
    })

    it('Locator Demo - Invalid', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

        cy.get("[name='username']").type('Admin')

        cy.get("[name='password']").type('admin12')

        cy.get("[type='submit']").click()

    })
})

// Account creation
