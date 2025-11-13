class ProductsPage {
  getAllProductsList() {
    return cy.get('.features_items .col-sm-4');
  }

  viewProductByIndex(index = 0) {
    // safer: find nth product and click its view button
    this.getAllProductsList().eq(index).find('a').contains('View Product').click();
  }

  searchResultsHeader() {
    return cy.get('.features_items').contains('Searched Products');
  }

  search(term) {
    cy.get('#search_product').clear().type(term);
    cy.get('#submit_search').click();
  }
}

module.exports = new ProductsPage();
