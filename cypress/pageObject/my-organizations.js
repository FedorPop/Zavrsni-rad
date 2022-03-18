class MyOrganizations {

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

    get addNewOrganization(){
        return cy.get('.vs-c-my-organization--add-new');
    }

    get inputName(){
        return cy.get('input');
    }

    get configBtn(){
        return cy.get('li[data-cy="organization-configuration"]');
    }

    get deleteBtn(){
        return cy.get('.vs-c-btn--warning');
    }

    get password(){
        return cy.get(':password');
    }

    get yesBtn(){
        return cy.get('[name="save-btn"]');
    }

    get orgId(){
        return cy.get('organizationId');
    }

    createOrganization(name){
        this.addNewOrganization.click();
        this.inputName.type(name);
        this.nextBtn.click();
        this.nextBtn.click();
        this.modalConfirmBtn.click();
    }

    deleteOrganization(password){
        
        this.modalConfirmBtn.click();
        this.configBtn.click();
        this.deleteBtn.click();
        this.password.type(password);
        this.yesBtn.click();

    }
}

export const myOrganizations = new MyOrganizations();