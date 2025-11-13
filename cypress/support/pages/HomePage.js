class HomePage {
  visit() {
    cy.visit('/');
  }

  getSignupLoginBtn() {
    return cy.get('a[href="/login"]');
  }

  getProductsNav() {
    return cy.get('a[href="/products"]');
  }

  searchFor(term) {
    cy.get('input[name="search"]').clear().type(term);
    cy.get('button[type="submit"]').contains('Search').click();
  }

  openContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }
}
module.exports=new HomePage();

