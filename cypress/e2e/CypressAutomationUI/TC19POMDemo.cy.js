import User from "../../support/PageObject/Admin/UserManagement/User";

describe('User Search Under Admin Section', ()=>{


    it('Usermanagement -> Search user', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

        cy.get("[name='username']").type('Admin')

        cy.get("[name='password']").type('admin123')

        cy.get("[type='submit']").click()

        cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();

        User.searchUserDetails('abhilash34567');

        User.searchUserDetailsAndEdit('abhilash34567');

    })
})