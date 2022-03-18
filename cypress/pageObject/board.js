class Board {

    get addNewBoard(){
        return cy.get('.vs-c-organization-boards__item--add-new');
    }

    get nextBtn(){
        return cy.get('[name="next_btn"]');
    }

    get finishBtn(){
        return this.nextBtn;
    }


    get previousBtn(){
        return cy.get('[name="previous_btn"]');
    }

    get modalConfirmBtn(){
        return cy.get('.vs-c-modal--features-confirm-button');
    }

    get scrumRadioBtn(){
        return cy.get('[value="scrum_board"]');
    }
    
    get inputName(){
        return cy.get('[name="name"]');
    }

    createBoard(name){
        this.addNewBoard.click();
        this.inputName.type(name);
        this.nextBtn.click();
        this.scrumRadioBtn.click({force: true});
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.finishBtn.click();

    }

    
}

export const newBoard = new Board();