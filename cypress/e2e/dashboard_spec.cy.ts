// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Spilled', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Displays landing page', () => {
    cy.get('h1').contains('Spilled')

  })

})