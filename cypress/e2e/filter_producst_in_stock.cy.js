describe('CFilter products in stock', () => {
    it('Filters products in stock and check their amount', () => {
      cy.visit('/cypress')
      cy.get('.filter-sections').find('[data-filter-code="stock"]').check({force: true}
      cy.get('[data-testid="productCards"] .product').should('have.length', 19);
      cy.get('.filter-count').invoke('text').then((filterCountText) => {
        const filterCount = parseInt(filterCountText, 10); 
      cy.get('[data-testid="productCards"] .product').should('have.length', filterCount);
      });
  })
})
data-testid="productCards"
<span class="filter-count">19</span>