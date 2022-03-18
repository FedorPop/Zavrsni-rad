/// <reference types='cypress'/>
import { loginPage } from "../pageObject/login"

describe('login', ()=>{

    beforeEach('visit baseUrl', ()=>{
        cy.visit('/')
        cy.url().should('contain', '/login')
    })


    it('valid credentials', ()=>{

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',

        }).as('loginIntercept');

        loginPage.login('zxcv@zxcv.com', 'zxcvzxcvzxcv123');

        cy.wait('@loginIntercept').then((intercept) => {
            expect(intercept.response.statusCode).eq(200)
        })
        cy.url().should('contain', '/my-organizations')
    })
})