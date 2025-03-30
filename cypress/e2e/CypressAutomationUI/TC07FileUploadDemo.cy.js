describe("File Upload", ()=>{


    it.only('Automation Blogspot Dropdown 2', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get("#singleFileInput").attachFile('example.json');

        cy.get('#multipleFilesInput').attachFile(['example.json', 'readme.md']);
        
        cy.get('#singleFileForm > button').click();

        cy.get('#multipleFilesForm > button').click();

        
    })
})