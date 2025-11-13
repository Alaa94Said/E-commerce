class LoginPage{
  OpenLoginPage(){
        cy.visit('/login');
    }
    FirstNameField(){
    return cy.get('input[type=text]');
}
LastNameField(){
    return cy.get('#LastName');
}
NewEmailField(){
    //return cy.get('#Email');
      return cy.get('input[data-qa="signup-email"]');
}
EmailField(){
    //return cy.get('#Email');
      return cy.get('input[data-qa="login-email"]');
}
LoginPassword(){
return cy.get('input[data-qa="login-password"]');
}
RegisterBTN(){
    //return cy.get('#register-button');
      return cy.get('button[data-qa="signup-button"]');
}
LoginBTN(){
    //return cy.get('#register-button');
      return cy.get('button[data-qa="login-button"]');
}
UserLoginFirst(FirstName,Email){
    this.FirstNameField().clear().type(FirstName);
    this.NewEmailField().clear().type(Email);
    this.RegisterBTN().click();
}
UserLogin(RegEmail,password){
    this.EmailField().clear().type(RegEmail);
    this.LoginPassword().clear().type(password);
    this.LoginBTN().click();
}
}

module.exports=new LoginPage();