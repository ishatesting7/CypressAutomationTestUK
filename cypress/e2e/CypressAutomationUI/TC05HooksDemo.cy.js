//Precondition
//Before
//After
//BeforeEach
//AfterEach

describe('Hooks Demo', ()=>{

    before('I am executing at the start',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    })

    beforeEach('Executing before each test cases', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.clearAllCookies();

        cy.clearAllLocalStorage();

        cy.clearAllSessionStorage();

        cy.log("Before Each Test Cases - 1")
    })

    it('Test Case 1 ', ()=>{

        cy.title().should('eq','OrangeHRM');
    })

    it('Test Case 2 ', ()=>{

        cy.title().should('eq','OrangeHRM');
    })
    it('Test Case 3 ', ()=>{

        cy.title().should('eq','OrangeHRM');
    })

    
    afterEach('Executing after each test cases', ()=>{

        cy.log("After Each Test Cases - 1")
    })


    after('I am executin after all the test case execution', ()=>{

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    })
})