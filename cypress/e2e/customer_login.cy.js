describe('Customer login', () => {
    it('Visits login page', () => {
      cy.visit('/login/')
      cy.get('[data-testid="inputEmail"]:visible').type('testuser@apple.com');
      cy.get('[data-testid="inputPassword"]:visible').type('test')
      cy.get('[data-testid="formLogin"]:visible').submit()
  })
})