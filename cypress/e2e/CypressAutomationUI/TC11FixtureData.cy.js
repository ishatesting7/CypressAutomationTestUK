describe('Read Data', ()=>{

    let data;
    before(()=>{

        cy.fixture('loginD').then((dataVa)=>{

            data = dataVa;

        })
    })

    it('Read data and insert in login form', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.wait(2000);

        cy.get("[name='username']").type(data.menu.username);
    
        cy.get("[name='password']").type(data.menu.items[0].password);
    
        cy.get("[type='submit']").click();

    })


})

