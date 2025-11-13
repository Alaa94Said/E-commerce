const ProductDetails = require('../support/pages/ProductDetailsPage.js');
const Home = require('../support/pages/HomePage');
//import Home from '../support/pages/HomePage.js';
const Products = require('../support/pages/ProductsPage.js');
const Cart = require('../support/pages/CartPage.js');


describe('Products journeys - automationexercise',()=>{
//     beforeEach(()=>{
//    ProductPage.visit();
//     })

 it('searches a product, views it and adds to cart', () => {
     Home.visit();
         Home.getProductsNav().click();
    Products.search('Dress');
    Products.searchResultsHeader().should('exist');
    Products.viewProductByIndex(0);
    ProductDetails.AddToCart();
        ProductDetails.CartSuccess().should('contains.text','Added!');
        ProductDetails.ContinueShoppingBTN().click();
         Cart.viewCart();
         Cart.getCartItems().should('have.length.greaterThan', 0);
    })

    it('Add review for the First product', () => {
         ProductDetails.OpenFirstProductDetails();
        ProductDetails.AddReview('lilly','aa@ff.gg','it is good');
         ProductDetails.SuccessReview().should('be.visible');
    })

})

