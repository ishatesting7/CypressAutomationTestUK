//http://restapi.adequateshop.com/api/Tourist

describe('API Test', ()=>{

    it('Hardcoded Payload', ()=>{

        const requestBody = {
            
                id: 12,
                petId: 21,
                quantity: 1,
                shipDate: "2025-04-26T07:11:40.982Z",
                status: "placed",
                complete: true
              
        }

        cy.request({

            method:"POST",
            url:'https://petstore.swagger.io/v2/store/order',
            body:requestBody

        }).then((response)=>{

            let resBody = JSON.stringify(response.body);
            cy.log(resBody);
        })
    })

    it('Hardcoded Payload - Using Fixture', ()=>{

        cy.fixture('bodystore').then((data)=>{

            let requestPayload = data;
        cy.request({

            method:"POST",
            url:'https://petstore.swagger.io/v2/store/order',
            body:requestPayload

        }).then((response)=>{

            let resBody = JSON.stringify(response.body);
            cy.log(resBody);
        })
    })
    })
})