describe('Linkedin, Facebook and Youtube', ()=>{

    beforeEach(()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })


    it('Navigate to first', ()=>{

        cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]')
        .should('have.attr', 'target', '_blank')
        .then(linkLinkedIn =>{

            cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]')
            .invoke('removeAttr','target').click()
            
        });

        cy.log(cy.url())
        cy.url().should('include','linkedin');

    })

    it('Navigate to second', ()=>{

        cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]')
        .should('have.attr', 'target', '_blank')
        .then(linkLinkedIn =>{

            cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]')
            .invoke('removeAttr','target').click()
            
        });

        cy.log(cy.url())

        cy.url().should('include','linkedin');
        
    })

    it('Navigate to third', ()=>{

        cy.get('a[href="https://twitter.com/orangehrm?lang=en"]')
        .should('have.attr', 'target', '_blank')
        .then(linkLinkedIn =>{

            cy.get('a[href="https://twitter.com/orangehrm?lang=en"]')
            .invoke('removeAttr','target').click()
            
        });

        cy.log(cy.url())

        cy.url().should('include','twitter');
        
    })
})