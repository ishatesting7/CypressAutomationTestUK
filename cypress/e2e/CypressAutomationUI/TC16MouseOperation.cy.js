describe('Mouse Operation', ()=>{

    it('Mouse Hover',()=>{

        cy.visit('https://tutorialsninja.com/demo/')

        cy.wait(3000)

        cy.get(':nth-child(8) > .dropdown-toggle').should('be.visible')

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34_51"]').should('not.be.visible');
   
        cy.get(':nth-child(8) > .dropdown-toggle').trigger('mouseover').click();
        
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=34_51"]').should('be.visible');


    })


    it('Right Click',()=>{

        cy.visit('https://tutorialsninja.com/demo/')

        cy.wait(3000)

        //cy.get(':nth-child(8) > .dropdown-toggle').rightclick();


        cy.get(':nth-child(8) > .dropdown-toggle').trigger('dblclick')

    })

    it('Drag and Drop', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        
        cy.get('#box4').should('be.visible');

        cy.get('#box106').should('be.visible');

        cy.get('#box4').drag('#box106',{force:true});

        cy.xpath("(//div[text()='Stockholm'])[2]").drag(".dragableBoxRight:nth-child(7)",{force:true});

    })

    it('Scroll',()=>{
        //Scroll
        //ScrollIntoView

        cy.visit('https://docs.cypress.io/api/commands/scrollintoview');

        cy.get(".footer__link-item[href='https://www.cypress.io/support?utm_medium=footer&utm_source=docs.cypress.io&utm_content=Support']").scrollIntoView({ duration: 5000 });


    })

    it.only('Cypress Scrol', ()=>{


        cy.visit('https://docs.cypress.io/api/commands/scrollto');
        cy.wait(2000);
        //cy.scrollTo('bottom',{ensureScrollable: true});
        cy.scrollTo('bottom');
    })

    it.only('.scrollIntoView() - scroll an element into view', () => {
        // https://on.cypress.io/scrollintoview
        
        cy.visit('https://example.cypress.io/commands/actions');
        // normally all of these buttons are hidden,
        // because they're not within
        // the viewable area of their parent
        // (we need to scroll to see them)
        cy.get('#scroll-horizontal button')
          .should('not.be.visible')
    
        // scroll the button into view, as if the user had scrolled
        cy.get('#scroll-horizontal button').scrollIntoView()
        cy.get('#scroll-horizontal button')
          .should('be.visible')
    
        cy.get('#scroll-vertical button')
          .should('not.be.visible')
    
        // Cypress handles the scroll direction needed
        cy.get('#scroll-vertical button').scrollIntoView()
        cy.get('#scroll-vertical button')
          .should('be.visible')
    
        cy.get('#scroll-both button')
          .should('not.be.visible')
    
        // Cypress knows to scroll to the right and down
        cy.get('#scroll-both button').scrollIntoView()
        cy.get('#scroll-both button')
          .should('be.visible')
      })


    

})