describe('Handle Dropdown', ()=>{


    // beforeEach(()=>{

    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    //     cy.get("[name='username']").type('Admin')

    //     cy.get("[name='password']").type('admin123')

    //     cy.get("[type='submit']").click()
    // })

    it("Dropdown 1 ", ()=>{

        cy.wait(2000)

        cy.contains("PIM").click();

        cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click();

        cy.wait(1000)

        cy.contains("Full-Time Contract").click();

        cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(1).click();

        cy.wait(1000)

        cy.contains("Past Employees Only").click();

        cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(2).click();

        cy.wait(1000)

        cy.contains("Support Specialist").click();

        cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(3).click();

        cy.wait(1000)

        cy.contains("hola").click();

        //cy.pause();
      
    })

    it('Automation Blogspot Dropdown 2', ()=>{


        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get("#country").select('Japan');

        
    })

    it.only('Autosuggestive Dropdown', ()=>{


        cy.visit("https://www.google.com/");

        cy.get(".gLFyf").type('Cypress Automation');

        cy.wait(3000)

        cy.get('[class="sbct PZPZlf"]').should('have.length',12)

        cy.log('Hello')

        cy.get('div.wM6W7d > span').each(($e1, index, $list)=>{

            cy.log($e1.text());
            if($e1.text()=="cypress automation")
            {
                cy.wrap($e1).click();
                
            }
        })


        cy.log('Hello 3')
    })

    
})