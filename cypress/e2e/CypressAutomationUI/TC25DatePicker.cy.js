describe('Date Picker and Tooltip', ()=>{

    it('ToolTip', ()=>{

        cy.visit('https://jqueryui.com/tooltip/');



        cy.get('iframe.demo-frame').then($iframe =>{


            const $body = $iframe.contents().find('body');

            cy.wrap($body).as('iFrameBodyDemo');

        });

        cy.get('@iFrameBodyDemo').find("[title='That's what this widget is']").trigger('mouseover');





        // cy.get().then((data)=>{

        //         cy.log(data.attr("title"))
        // })
    })
})