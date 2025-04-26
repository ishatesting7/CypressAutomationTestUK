//API Testing
//Request
//Request Method - POST, GET, PUT, PATCH, DELETE
//Request Payload
//Response Payload
//Query Param
//Path Param

const baseURL = "https://petstore.swagger.io/v2";
let id;
let statusValue;
const bodyPost = {
    "id": 238987,
    "category": {
      "id": 238987,
      "name": "Tommy"
    },
    "name": "doggie",
    "photoUrls": [
      "Tommy"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Tommy"
      }
    ],
    "status": "sold"
  }



describe('Pet Store API',()=>{


    it("Add a Pet", ()=>{

        cy.request({
            method:"POST",
            url:`${baseURL}/pet`,
            body:bodyPost
            

        }).then((response)=>{
            cy.log(response.body)
            id = response.body.id;
            cy.log(id);
            const resBody = JSON.stringify(response.body)
            cy.log(resBody)
            expect(response.status).to.equal(200);
            expect(response.body.status).to.eq('sold');
        })
    })

    it('Get Pet Details', ()=>{

        cy.request({

            method:"GET",
            url:`${baseURL}/pet/${id}`
        }).then((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
            statusValue = response.body.status;
            expect(response.body.status).to.eq('sold');
            expect(response.body.id).to.equal(238987);
            expect(response.body.category.name).to.equal('Tommy');

        })
    })

    it('Get Pet Details By Status', ()=>{

        cy.request({

            method:"GET",
            url:`${baseURL}/pet/findByStatus?status=${statusValue}`
        }).then((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
            //expect(response.body[5].id).to.eq(238987)
            let m = response.body.length;
            cy.log(m);
            for(let i =0; i<=m;i++)
            {
                let idValue = response.body[i].id;
                if(idValue === 238987 )
                {
                    cy.log('Test Case Passed')
                }
            }

        })
    })
})