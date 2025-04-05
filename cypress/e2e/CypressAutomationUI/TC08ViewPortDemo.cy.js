
describe('View Port Demo', ()=>{

it.only('View Port Demo - Iphone', ()=>{

    cy.viewport('iphone-xr','landscape')

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.get("[name='username']").type('Admin')

    cy.get("[name='password']").type('admin123')

    cy.get("[type='submit']").click()

})

it('View Port Demo - Macbook', ()=>{

    cy.viewport('macbook-16')

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.get("[name='username']").type('Admin')

    cy.get("[name='password']").type('admin123')

    cy.get("[type='submit']").click()

})

it('View Port Demo - Samsung', ()=>{

    cy.viewport(1080, 2400)

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.get("[name='username']").type('Admin')

    cy.get("[name='password']").type('admin123')

    cy.get("[type='submit']").click()

})





})