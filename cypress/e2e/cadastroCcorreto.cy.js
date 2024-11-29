describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  it('Deve preencher os campos corretamnete e realizar o cadastro', () => {
    cy.cadastro('Mateus', 'mateus@gmail.com','Senha123');
    })
})