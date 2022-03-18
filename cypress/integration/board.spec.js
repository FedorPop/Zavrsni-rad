/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login"
import { myOrganizations } from "../pageObject/my-organizations";

describe('board', ()=>{

    before('login', ()=>{
        cy.visit('/login')
        loginPage.login('zxcv@zxcv.com', 'zxcvzxcvzxcv123');
    })

    it('select organization', ()=>{
        cy.url().should('contain', '/my-organizations');
        cy.get('h2').should('be.visible');
        cy.get('.organization-list-item').eq(0).click();
        myOrganizations.modalConfirmBtn.click();        
    })

    it('add new board', ()=>{
        
        newBoard.createBoard('TestQA10');
        
    })
    it('delete board', ()=> {
        cy.get("a").contains('TestQA10').click({force: true});
        cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo').click({force: true});
        cy.get('.vs-c-btn--warning').click();
        cy.get('[name="save-btn"]').click();
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click();
    })



})