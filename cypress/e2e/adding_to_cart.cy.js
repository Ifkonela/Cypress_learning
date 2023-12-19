describe('My First Test', () => {
  it('Visits qa-claasic testing shop', () => {
    cy.visit('/')
    cy.contains('Do košíku').click()
  })
})