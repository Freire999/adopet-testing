describe('Acesso a página de login', () => {
    beforeEach(() =>{     
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {statusCode:400,}).as('stubPost')
  })

    it('Vericica mensagem de falha no login', () => {
      cy.get('[data-test="submit-button"]').click()
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Insira sua senha').should('be.visible')
      })

    it('Deve falhar mesmo com os campos preenchidos corretamente', () => {
      cy.login('mateus@gmail.com', 'Senha123')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais').should('be.visible')
    })
  })