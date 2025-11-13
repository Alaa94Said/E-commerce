const Home = require('../support/pages/HomePage');
const Products = require('../support/pages/ProductsPage');

describe('Search for dress',()=>{
   it.only('Search for Dress', () => {
     Home.visit();
     Home.getProductsNav().click();
    Products.search('Dress');
    Products.searchResultsHeader().should('exist');

});

})

