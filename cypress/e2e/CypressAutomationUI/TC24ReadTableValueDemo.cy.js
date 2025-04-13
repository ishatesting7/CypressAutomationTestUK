describe("Read Table Data", ()=>{

    beforeEach('Login Into Application', ()=>{

        cy.visit('https://demo3x.opencartreports.com/admin/index.php?route=common/login');

        cy.get('#input-username').type('demo');

        cy.get('#input-password').type('demo');

        cy.get("button[type='submit']").click();

        cy.get(".parent.collapsed[href='#collapse5']").click();

        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();

        cy.wait(3000)

    })

    it('Count Number of Rows and Column', ()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length',7);
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', 10);
   
    })

    it('Read Specific Value', ()=>{

        cy.get('.table > tbody > :nth-child(1) > :nth-child(2)').then((data)=>{

            cy.log(data.text());
        })
    })

    it('Read all the rows and columns',()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row,index,$rows)=>{


            cy.wrap($row).within(()=>{

                cy.get('td')
                .each(($col, index, $cols)=>{

                    //cy.log($col.text());

                    if($col.text()==='Billy Brooks')
                    {
                        cy.log("Test Case Passed")
                    }
                })
            })

        })
})
})