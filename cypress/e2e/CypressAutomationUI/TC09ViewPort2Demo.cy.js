const sizes = ['iphone-6', 'ipad-2', [1024, 768],'iphone-x','iphone-se2']

describe('Logo', () => {
  sizes.forEach((size) => {
    const screen = "test";
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display logo on ${size} screen ${screen}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      cy.get("[name='username']").type('Admin')
  
      cy.get("[name='password']").type('admin123')
  
      cy.get("[type='submit']").click()

    })
  })
})