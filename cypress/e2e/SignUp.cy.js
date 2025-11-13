const Register = require('../support/pages/RegisterPage');
const Login = require('../support/pages/LoginPage');

describe('sign up flow',()=>{
//     beforeEach(()=>{
//    RegisterPage.visit();
//     });

   it('sign up first page', () => {
        // Dynamically generate a unique email each run
    const uniqueEmail = `user_${Date.now()}@testmail.com`;
    Login.OpenLoginPage();
   Login.UserLoginFirst('Alaa',uniqueEmail); 
   Register.UserSignUp('Female','Lilly','said','AA@AA.AA','123456987','add','cairo','sherouk','00256','01021154895');
  Register.SuccessMSG().should('be.visible')
  .and('contain.text', 'Account Created!');
     Register.ContinueBTN().click();
    });

});