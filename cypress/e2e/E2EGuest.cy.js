const Register = require('../support/pages/RegisterPage');
const Login = require('../support/pages/LoginPage');
const Product = require('../support/pages/ProductDetailsPage');
const Cart = require('../support/pages/CartPage.js');
const Checkout = require('../support/pages/CheckoutPage.js');

describe('E2E - Complete Purchase Flow', () => {
  it('Register, adds item to cart, adds review and completes checkout', () => {
    const uniqueEmail = `user_${Date.now()}@testmail.com`;
   Login.OpenLoginPage();
   Login.UserLoginFirst('Alaa',uniqueEmail); 
   Register.UserSignUp('Female','Lilly','said','AA@AA.AA','123456987','add','cairo','sherouk','00256','01021154895');
  Register.SuccessMSG().should('be.visible')
  .and('contain.text', 'Account Created!');
   Register.ContinueBTN().click();
     Product.OpenFirstProductDetails();
        Product.AddToCart();
        Product.CartSuccess().should('contains.text','Added!');
        Product.ContinueShoppingBTN().click();
        Product.AddReview('lilly','aa@ff.gg','it is good');
        Product.SuccessReview().should('be.visible');
        Cart.viewCart();
              Cart.ProceedToCheckout();
              Checkout.PlaceOrder();
              Checkout.FillPaymentDetails("alaa",'555','47','44','77');
             // Checkout.OrderPlacedSuccessfully().should('be.visible');

    })

   
  })