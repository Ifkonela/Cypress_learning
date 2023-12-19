describe('Řazení produktů od nejdražšího', () => {
  it('Ověření, že první produkt je nejdražší', () => {
    cy.visit('/cypress'); 
    cy.contains('Nejdražší').click();
    cy.get('[data-testid="productCards"]').within(() => {
      cy.wait(1000); 
      cy.get('[data-testid="productCardPrice"]').then(($prices) => {
        const prices = $prices.toArray().map(price => {
          const priceText = price.innerText.replace('Kč', '').replace(',', '.').replace('od ', '');
          return parseFloat(priceText);
        });
        const firstPrice = prices[0];
        for (let i = 1; i < prices.length; i++) {
          cy.log(`Očekáváno, že ${firstPrice} je vyšší nebo stejná jako ${prices[i]}`);
          expect(firstPrice).to.be.at.least(prices[i]);
        }
      });
    });
  });
});