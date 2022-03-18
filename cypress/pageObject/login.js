class LoginPage {

    get email(){
        return cy.get('[type="email"]');
    }

    get password(){
        return cy.get(':password');
    }

    get loginBtn(){
        return cy.get('[type="submit"]');
    }

    get forgotenPass(){
        return cy.get('[data-cy]').eq(0).click();
    }

    get backToHome(){
        return cy.get('[data-cy]').eq(2).click();
    }

    get googleBtn(){
        return cy.get('[data-cy]').eq(2).click();
    }

    get faceBtn(){
        return cy.get('[data-cy]').eq(2).click();
    }

    get twiterBtn(){
        return cy.get('[data-cy]').eq(2).click();
    }

    get regzenBtn(){
        return cy.get('[data-cy]').eq(2).click();
    }

    get signUp(){
        return cy.get('[data-cy]').eq(2).click();
    }

    login(email, password){
        this.email.type(email);
        this.password.type(password);
        this.loginBtn.click();
    }

    
}

export const loginPage = new LoginPage();