 const Cart = require('../support/pages/CartPage');
const Product = require('../support/pages/ProductDetailsPage');
const LoginPage = require('../support/pages/LoginPage');
const Checkout = require('../support/pages/CheckoutPage');

describe('Checkout Flow',()=>{
    it('Logs in, adds item to cart, and completes checkout', () => {
      cy.loginViaUI('ff@gg.ff','zdq@9u5xGX@qrAf');
        Product.OpenFirstProductDetails();
        Product.AddToCart();
         Product.CartSuccess().should('contains.text','Added!');
              Product.ContinueShoppingBTN().click();
        Cart.viewCart();
      Cart.ProceedToCheckout();
      Checkout.PlaceOrder();
      Checkout.FillPaymentDetails("alaa",'555','47','44','77');
      Checkout.OrderPlacedSuccessfully().should('be.visible');

    })

});