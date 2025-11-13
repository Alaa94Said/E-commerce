class CheckoutPage {

    PlaceOrderBTN(){
        return cy.get('#cart_items > div > div:nth-child(7) > a');
    }

    NameOnCard(){
        return cy.get('#payment-form > div:nth-child(2) > div > input')
    }
    CardnumberField(){
        return cy.get('#payment-form > div:nth-child(3) > div > input')
    }
    CVCField(){
         return cy.get('#payment-form > div:nth-child(4) > div.col-sm-4.form-group.cvc > input')
    }
    ExpField(){
         return cy.get('#payment-form > div:nth-child(4) > div:nth-child(2) > input')
    }
    DateField(){
         return cy.get('#payment-form > div:nth-child(4) > div:nth-child(3) > input')
    }
    ConfirmOrderBTN(){
        return cy.get('#submit');
    }
    OrderPlacedSuccessfully(){
        return cy.get('#form > div > div > div > h2 > b');
    }
    FillPaymentDetails(name,CardNumber,CVC,EXP,Date){
        this.NameOnCard().type(name);
        this.CardnumberField().type(CardNumber);
        this.CVCField().type(CVC);
        this.ExpField().type(EXP);
          this.DateField().type(Date);
          this.ConfirmOrderBTN().click();
    }
    PlaceOrder(){
        this.PlaceOrderBTN().click();
    }


} module.exports=new CheckoutPage();