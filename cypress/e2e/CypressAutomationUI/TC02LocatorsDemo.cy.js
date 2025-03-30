describe('Locator Demo', ()=>{

    it('Locator Demo - Valid', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

        cy.get("[name='username']").type('Admin')

        cy.get("[name='password']").type('admin123')

        cy.get("[type='submit']").click()

    })

    it('Locator Demo - Invalid', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

        cy.get("[name='username']").type('Admin')

        cy.get("[name='password']").type('admin12')

        cy.get("[type='submit']").click()
        

    })
})

/*

CSS - Cascading Style Sheet

Way to write the CSS
--------------------

HTML Code - 

<input class="input_error form_input" placeholder="Username" 
type="text" data-test="username" id="user-name" name="user-name" 
autocorrect="off" autocapitalize="none" value="">

Tags - input
Attribute - class, placeholder, type, data-test, id, name, autocorrect, value
Value - Username,username



Way to write the CSS
--------------------

1. If you are aware about the classname then the CSS - .classname
2. If you are aware about the ID attribute then the CSS - #id
3. If you are aware about the attribute and value then the CSS - [attribute='value']
4. If you are aware about all 3 - tagname[attribute='value']








*/