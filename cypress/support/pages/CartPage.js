class CartPage {

 viewCart(){
return  cy.visit('https://automationexercise.com/view_cart');
}

ProceedBTN(){
    return cy.get('.check_out').contains('Proceed To Checkout');
}
ProceedToCheckout(){
    this.ProceedBTN().click();
}
     getCartItems() {
    return cy.get('.cart_info tbody tr');
  }
} module.exports=new CartPage();