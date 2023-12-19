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
        for (let i = 0; i < prices.length; i++) {
          cy.log(`Očekáváno, že ${prices[i]} je vyšší nebo stejná jako ${prices[i+1]}`);
          expect(prices[i]).to.be.at.least(prices[i+1]);
          
        }
      });
    });
  });
});
