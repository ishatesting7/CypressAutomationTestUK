it('Internet Hiroku', ()=>{


    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.get('.example > a').invoke('removeAttr','target').click();

    //cy.get('.example > a').should('have.attr', 'target', '_blank')

    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

    cy.go('back');

    cy.go('forward');

    cy.go(-1); // Back

    cy.go(1);  // Forward


})