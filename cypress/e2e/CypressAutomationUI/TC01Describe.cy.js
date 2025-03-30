
describe('Validate the Login Flow',()=>{
    //Variables
    //let    var     const
    // var - function scope
    // let - Blocked scope
    // const - Blocked scope


    //Run
    //Headed and Headless
    

    var text = 20;
    var baseURL="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    it('Validate with valid username and valid password', function(){
       cy.visit(baseURL);
    })

    it('Validate with valid username and invalid password', function(){
        cy.visit(baseURL);
        cy.log(text);

    })

    it('Validate with invalid username and valid password', function(){
        cy.visit(baseURL);
        console.log("This will be console log")
    })

    it('Validate with invalid username and invalid password', function(){
        
        cy.visit(baseURL);
        cy.wait(1000);
        cy.pause();
        cy.visit("https://www.saucedemo.com/");
    })

})