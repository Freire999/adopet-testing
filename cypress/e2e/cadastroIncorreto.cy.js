describe('template spec', () => {
    beforeEach(() =>     cy.visit('https://adopet-frontend-cypress.vercel.app/')
  )
    it('passes', () => {
      cy.get('[data-test="register-button"]').click()
      cy.get('[data-test="input-name"]').type(' ');
      cy.get('[data-test="input-email"]').type('Mateus')
      cy.get('[data-test="input-password"]').type('123');
      cy.get('[data-test="input-confirm-password"]').type('456');
      cy.get('[data-test="submit-button"]').click()
      })
  })