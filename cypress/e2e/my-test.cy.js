describe('My First Test', () => {
  it('Visits the Amazona', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[id=signIn]').click()
    cy.get('input[id=email]').type('admin@example.com')
    cy.get('input[id=password]').type(`${1234}{enter}`)
    cy.get('a[id=Admin]').should('exist')
  })
})