describe('Handle Alert Demo', ()=>{


    it('JS Alert - Ok', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (temp)=>{

            expect(temp).to.contains('I am a JS Alert')
        })

        cy.xpath("//p[@id='result']").should('have.text','You successfully clicked an alert')
    })


    it('JS Alert - Ok and cancel button', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (temp)=>{

            expect(temp).to.contains('I am a JS Confirm')
        })

        cy.xpath("//p[@id='result']").should('have.text','You clicked: Ok')
    })


    it('JS Alert - Ok and cancel button', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (temp)=>{

            expect(temp).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=>false);

        cy.xpath("//p[@id='result']").should('have.text','You clicked: Cancel')
    })


    it('JS Alert - Ok and cancel button', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((windowDetails)=>{

            cy.stub(windowDetails, 'prompt').returns('ABC XYZ')
        })

        cy.get('[onclick="jsPrompt()"]').click({force:true});

        cy.get('#result').should('have.text', 'You entered: ABC XYZ')

        //cy.xpath("//p[@id='result']").should('have.text','You clicked: Cancel')
    })

    it.only('Basic Auth', ()=>{

        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
        {
            username:'admin',
            password:'admin'
        }
    });

    })
})
