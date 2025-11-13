class ProductDetailsPage{

    OpenFirstProductDetails(){
        cy.visit('/product_details/1');
    }
Title(){
    return cy.get('strong.current-item');
}
AddToCartBTN(){
    return cy.get('button.cart i.fa-shopping-cart'); //class then class
}
CartSuccess(){
    return cy.get('h4.modal-title');
    //contains Added!
}
ContinueShoppingBTN(){ // button tag & text
    return cy.contains('button','Continue Shopping');
}
Name(){
    return cy.get('#name').scrollIntoView();
}
Email(){
    return cy.get('#email');
}
ReviewTXT(){
return cy.get('#review');
}
SubmitBTN(){
return cy.get('#button-review');
}
SuccessReview(){
    return cy.get('#review-section > div > div > span');
}
OpenSendEmail(){
this.EmailFriend().click();
}
AddReview(name,email,reviewTXT){
this.Name().clear().type(name);
this.Email().clear().type(email);
this.ReviewTXT().clear().type(reviewTXT);
this.SubmitBTN().click();

}

AddToCart(){
this.AddToCartBTN().click();
}
}

module.exports=new ProductDetailsPage();