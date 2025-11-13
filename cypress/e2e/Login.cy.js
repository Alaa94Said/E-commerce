const Login = require('../support/pages/LoginPage');


describe('Login flow',()=>{

   it('login by existing account', () => {
     cy.loginViaUI('ff@gg.ff','zdq@9u5xGX@qrAf');
    });

});