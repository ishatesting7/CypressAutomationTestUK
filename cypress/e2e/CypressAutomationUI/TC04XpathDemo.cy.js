describe('Xpath Demo', ()=>{

    const randomString = Math.random().toString(20).substring(2,12);

    var emailID = randomString+"@gmail.com";

    it('Registration into website', ()=>{

        cy.visit("/index.php?route=account/login");

        cy.wait(2000)

        cy.xpath("//a[contains(text(),'Register')]").click()
        
        cy.xpath('//input[@id="input-firstname"]').type("Ram");

        cy.xpath("//input[@id='input-lastname']").type("Jain");

        cy.xpath("//input[@id='input-email']").type(emailID);

        cy.xpath("//input[@id='input-telephone']").type("9283913203")

        cy.xpath("//input[@id='input-password']").type("admin123");

        cy.xpath("//input[@id='input-confirm']").type("admin123");   

        cy.xpath("//label[@for='input-agree']").click();

        cy.get("input[value='Continue']").click();

        


    })

    it("Login into Account", ()=>{

        cy.visit("/index.php?route=account/login");

        cy.get('#input-email').type(emailID);

        cy.get('#input-password').type("admin123")

        cy.get('form > .btn').click()

    })


    it('Forget Password', ()=>{

        cy.visit("/index.php?route=account/forgotten")

        cy.url().should('contain',"forgotten");
        
        cy.title().should('equal', 'Forgot your password?')

    })
})

