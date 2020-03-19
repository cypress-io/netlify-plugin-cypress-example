/// <reference types="cypress" />
describe('Gatsby blog', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads home page', () => {
    cy.get('main > h1')
  })

  it('navigates to second page and back', () => {
    cy.contains('a', 'Go to page 2').click()
    cy.url().should('match', /page-2/)
    cy.contains('main > h1', 'Hi from the second page')
    cy.contains('a', 'Go back to the homepage').click()
    cy.url().should('include', Cypress.config('baseUrl'))
  })
})
