describe('Read Data', ()=>{


    it('Read data and insert in login form', ()=>{

        cy.fixture('loginData').then((data)=>{
            
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((userData)=>{

                cy.wait(2000);

                cy.get("[name='username']").type(userData.username);
            
                cy.get("[name='password']").type(userData.password);
            
                cy.get("[type='submit']").click();

                if(userData.username == 'Admin' && userData.password == 'admin123')
                {
                    cy.get('.oxd-userdropdown-name').click();
                    cy.contains('Logout').click();
                    cy.wait(3000)
                }
                else
                {
                    cy.get('.oxd-alert-content').should('be.visible');
                }

            })

        })


       

    })


})

