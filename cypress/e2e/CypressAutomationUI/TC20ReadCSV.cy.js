
import { faker } from '@faker-js/faker';
const csv = require('neat-csv')

let regData
let loginData

describe('Registration Form', () => {
    before(() => {
        cy.fixture("sampleData.csv")
            .then(csv)
            .then((data) => {
                regData = data
            })

        cy.fixture("sampleData2.csv")
            .then(csv)
            .then((data) => {
                loginData = data
            })
    })

    it(' Fill Reg Form for different users ', () => {
        for (let i = 0; i < regData.length; i++) {
            cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
            cy.get('#input-firstname').type(regData[i]['firstName']);
            cy.get('#input-lastname').type(regData[i]['lastName']);
            cy.get('#input-email').type(faker.internet.ipv4()+ regData[i]['Email']);            
            cy.get('#input-telephone').type(regData[i]['Telephone']);
            cy.get('#input-password').type(regData[i]['Password']);
            cy.get('#input-confirm').type(regData[i]['Password']);
            cy.get('input[type="checkbox"]').check()
            cy.get('input.btn.btn-primary').click()
            cy.get('a[data-toggle="dropdown"]').first().click()
            cy.contains('Logout').click()
        }

    })


    it.only("login into the application",()=>{


        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

        for (let i = 0; i < loginData.length; i++) {

            cy.get('#input-email').clear();
            cy.get('#input-email').type(loginData[i]['username']);
            cy.get('#input-password').type(loginData[i]['password']);

        }
    })

})