describe('Product fulltext search', () => {
    it('Visit product searched by fulltext', () => {
      cy.visit('/')
      cy.get('[data-testid="searchInput"]').type('Apple Produkt').type('{enter}');
      cy.contains('[data-testid="productCardName"]', 'Apple Produkt').click();
      cy.url().should('include', '/apple-produkt/'); 
      cy.contains('CY/APPLE').should('exist');
    })
  })

