class RegisterPage{
    openSignup(){
        cy.visit('/signup');
        //cy.get('input[type=checkbox]').click();
    }

FemaleGenderField(){
    return cy.get('#id_gender2');
}
MaleGenderField(){
    return cy.get('#id_gender1');
}
NameField(){
    //return cy.get('#FirstName');
    return cy.get('#name');
}
PasswordField(){
    return cy.get('#password');
}
EmailField(){
    //return cy.get('#Email');
      return cy.get('input[type=email]');
}
FirstNameField(){
    return cy.get('#first_name');
    
}
LastNameField(){
    return cy.get('#last_name');
}
AddressField(){
    return cy.get('#address1');
}
StateField(){
    return cy.get('#state');
}
CityField(){
    return cy.get('#city');
}
CodeField(){
    return cy.get('#zipcode');
}
MobileField(){
    return cy.get('#mobile_number');
}
CreateAccountBTN(){
    return cy.get('button[data-qa="create-account"]');
}
SuccessMSG(){
    //return cy.get('div.result');   // tag+class name)
//return cy.get('.div.h2.title').contains('account-created');
return cy.get('[data-qa="account-created"]');
}
ContinueBTN(){
    return cy.get('[data-qa="continue-button"]')
}

LogOut(){
    return cy.get('a.ico-logout');
}
LogIn(){
    return cy.contains('Log in');
}
MyAccount(){
    return cy.contains('My account');
}

UserSignUp(Gender,FirstName,LastName,Email,Password,Add,city,state,code,mob){
    if(Gender='Female') this.FemaleGenderField().check();
    else this.MaleGenderField().check();
    this.NameField().clear().type(FirstName);
    this.FirstNameField().clear().type(FirstName);
    this.LastNameField().clear().type(LastName);
    this.EmailField().clear().type(Email);
    this.PasswordField().clear().type(Password);
    this.AddressField().clear().type(Add);
    this.CityField().clear().type(city);
    this.StateField().clear().type(state);
    this.CodeField().clear().type(code);
    this.MobileField().clear().type(mob);
    //this.ConfirmPasswordField().clear.type(Password);
    this.CreateAccountBTN().click();
}

UserLogout(){
this.LogOut().click();
}

OpenMyAccount(){
    this.OpenMyAccount().click();
}
}

module.exports = new RegisterPage();